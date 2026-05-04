"use client";

import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
} from "@dnd-kit/core";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

/* ---------------- BLOCK FACTORY ---------------- */

const createBlock = (type: string) => {
  const id = crypto.randomUUID();

  if (type === "text") return { id, type, content: "<p>Edit text...</p>" };

  if (type === "image") return { id, type, src: "" };

  if (type === "button")
    return {
      id,
      type,
      text: "Click Me",
      link: "#",
      color: "#2563eb",
    };

  if (type === "section")
    return {
      id,
      type,
      columns: [{ id: crypto.randomUUID(), blocks: [] }],
    };
};

/* ---------------- HELPERS ---------------- */

const findBlock = (blocks: any[], id: string): any => {
  for (let b of blocks) {
    if (b.id === id) return b;

    if (b.type === "section") {
      for (let col of b.columns) {
        const found = findBlock(col.blocks, id);
        if (found) return found;
      }
    }
  }
};

const updateBlock = (blocks: any[], id: string, updater: any) =>
  blocks.map((b) => {
    if (b.id === id) return updater(b);

    if (b.type === "section") {
      return {
        ...b,
        columns: b.columns.map((col: any) => ({
          ...col,
          blocks: updateBlock(col.blocks, id, updater),
        })),
      };
    }

    return b;
  });

const addToColumn = (blocks: any[], colId: string, newBlock: any) =>
  blocks.map((b) => {
    if (b.type === "section") {
      return {
        ...b,
        columns: b.columns.map((col: any) =>
          col.id === colId
            ? { ...col, blocks: [...col.blocks, newBlock] }
            : {
                ...col,
                blocks: addToColumn(col.blocks, colId, newBlock),
              },
        ),
      };
    }
    return b;
  });

/* ---------------- SIDEBAR ---------------- */

function SidebarItem({ id, label }: any) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="bg-red-500 text-white p-3 mb-3 rounded text-center cursor-grab"
    >
      {label}
    </div>
  );
}

/* ---------------- TEXT EDITOR ---------------- */

function TextEditor({ value, onChange }: any) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "<p></p>",
    immediatelyRender: false, // ✅ FIX SSR ERROR
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border p-2 bg-white">
      <div className="flex gap-2 mb-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

/* ---------------- COLUMN ---------------- */

function Column({ column, setSelectedId }: any) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-h-[120px] p-2 border ${
        isOver ? "bg-green-100" : ""
      }`}
    >
      {column.blocks.map((block: any) => (
        <Block key={block.id} block={block} setSelectedId={setSelectedId} />
      ))}
    </div>
  );
}

/* ---------------- BLOCK ---------------- */

function Block({ block, setSelectedId }: any) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setSelectedId(block.id);
      }}
      className="border p-3 mb-3 bg-white cursor-pointer"
    >
      {/* TEXT */}
      {block.type === "text" && (
        <div
          dangerouslySetInnerHTML={{
            __html: block.content,
          }}
        />
      )}

      {/* IMAGE */}
      {block.type === "image" &&
        (block.src ? (
          <img src={block.src} className="w-full rounded" />
        ) : (
          <div className="text-gray-400 text-center">Add Image</div>
        ))}

      {/* BUTTON */}
      {block.type === "button" && (
        <a
          href={block.link}
          style={{ background: block.color }}
          className="text-white px-4 py-2 inline-block rounded"
        >
          {block.text}
        </a>
      )}

      {/* SECTION */}
      {block.type === "section" && (
        <div className="bg-gray-100 p-3">
          <div className="flex justify-between mb-2">
            <span>Section</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const count = prompt("Columns?");
                if (!count) return;

                block.columns = Array.from({ length: Number(count) }, () => ({
                  id: crypto.randomUUID(),
                  blocks: [],
                }));
              }}
              className="text-xs bg-black text-white px-2"
            >
              + Columns
            </button>
          </div>

          <div className="flex gap-2">
            {block.columns.map((col: any) => (
              <Column key={col.id} column={col} setSelectedId={setSelectedId} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- CANVAS ---------------- */

function Canvas({ blocks, setSelectedId }: any) {
  const { setNodeRef, isOver } = useDroppable({
    id: "canvas",
  });

  return (
    <div
      ref={setNodeRef}
      className={`border-2 border-dashed p-4 min-h-[500px] ${
        isOver ? "bg-blue-100" : ""
      }`}
    >
      {blocks.map((block: any) => (
        <Block key={block.id} block={block} setSelectedId={setSelectedId} />
      ))}
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function BuilderPage() {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [preview, setPreview] = useState(false);

  const selected = findBlock(blocks, selectedId);

  const handleDragEnd = ({ active, over }: any) => {
    if (!over) return;

    const newBlock = createBlock(active.id);

    if (over.id === "canvas") {
      setBlocks((prev) => [...prev, newBlock]);
    } else {
      setBlocks((prev) => addToColumn(prev, over.id, newBlock));
    }
  };

  return (
    <div className="flex h-screen">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        {/* SIDEBAR */}
        {!preview && (
          <div className="w-1/5 bg-gray-900 p-4 text-white">
            <SidebarItem id="section" label="Section" />
            <SidebarItem id="text" label="Text" />
            <SidebarItem id="image" label="Image" />
            <SidebarItem id="button" label="Button" />
          </div>
        )}

        {/* MAIN */}
        <div className="flex-1 p-6">
          {!preview && (
            <div className="flex gap-2 mb-4">
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2"
              />
              <input
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="border p-2"
              />
            </div>
          )}

          <div className="flex gap-2 mb-4">
            <button onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>

            <button onClick={() => console.log({ title, slug, blocks })}>
              Save
            </button>
          </div>

          <Canvas blocks={blocks} setSelectedId={setSelectedId} />
        </div>

        {/* PROPERTIES */}
        {!preview && (
          <div className="w-1/5 bg-gray-100 p-4">
            {!selected && <div>Select element</div>}

            {selected?.type === "text" && (
              <TextEditor
                value={selected.content}
                onChange={(val: string) =>
                  setBlocks((prev) =>
                    updateBlock(prev, selected.id, (b: any) => ({
                      ...b,
                      content: val,
                    })),
                  )
                }
              />
            )}

            {selected?.type === "image" && (
              <div>
                {/* URL INPUT */}
                <input
                  placeholder="Paste Image URL"
                  value={selected.src || ""}
                  onChange={(e) =>
                    setBlocks((prev) =>
                      updateBlock(prev, selected.id, (b: any) => ({
                        ...b,
                        src: e.target.value,
                      })),
                    )
                  }
                  className="w-full border p-2 mb-2"
                />

                {/* FILE UPLOAD */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    if (!file) return;

                    const reader = new FileReader();
                    reader.onload = () => {
                      setBlocks((prev) =>
                        updateBlock(prev, selected.id, (b: any) => ({
                          ...b,
                          src: reader.result, // base64 preview
                        })),
                      );
                    };
                    reader.readAsDataURL(file);
                  }}
                />

                {/* DRAG DROP AREA */}
                <div
                  className="border-dashed border p-4 mt-3 text-center"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e: any) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];

                    const reader = new FileReader();
                    reader.onload = () => {
                      setBlocks((prev) =>
                        updateBlock(prev, selected.id, (b: any) => ({
                          ...b,
                          src: reader.result,
                        })),
                      );
                    };
                    reader.readAsDataURL(file);
                  }}
                >
                  Drag & Drop Image Here
                </div>
              </div>
            )}

            {selected?.type === "button" && (
              <>
                <input
                  value={selected.text}
                  onChange={(e) =>
                    setBlocks((prev) =>
                      updateBlock(prev, selected.id, (b: any) => ({
                        ...b,
                        text: e.target.value,
                      })),
                    )
                  }
                />
                <input
                  value={selected.link}
                  onChange={(e) =>
                    setBlocks((prev) =>
                      updateBlock(prev, selected.id, (b: any) => ({
                        ...b,
                        link: e.target.value,
                      })),
                    )
                  }
                />
              </>
            )}
          </div>
        )}
      </DndContext>
    </div>
  );
}
