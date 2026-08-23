import Image from "next/image";

export function EditorFeature() {
  return (
    <section className="px-4 py-8 sm:py-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-background">
        <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              The editor
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
              A Notion-style editor that stays with the work
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Write with slash commands, headings, and embeds. The same page can
              live in a collection and move across a board — docs and delivery
              stay in one place.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground sm:text-base">
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                Slash commands for headings, lists, and embeds
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                Pages that belong to a collection, not a separate wiki
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                Board view when you need to see status, not just text
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm">
            <Image
              src="/_static/rich-editor.png"
              alt="Orgnise rich text editor with formatted document content"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="grid items-center gap-8 border-t border-border bg-muted/30 p-6 sm:p-10 lg:grid-cols-2 lg:px-14">
          <div className="order-2 overflow-hidden rounded-xl border border-border bg-background lg:order-1">
            <Image
              src="/_static/board-view.png"
              alt="Collection shown as a kanban board with columns for each stage"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              The same pages, on a board
            </h3>
            <p className="mt-3 text-muted-foreground">
              Turn a collection into columns. Move a page from idea to done
              without copying it into another tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
