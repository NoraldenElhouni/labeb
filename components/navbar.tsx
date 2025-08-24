"use client";

import { useEffect, useState } from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { Home, Settings, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SCROLL_COLLAPSE_Y = 80;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setCollapsed(y > SCROLL_COLLAPSE_Y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // wrapper styles → now top instead of bottom
  const baseWrap =
    "fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none";

  return (
    <>
      {/* Expanded dock when at top (not collapsed) */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            key="expanded-dock"
            className={baseWrap}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <div className="pointer-events-auto">
              <Dock iconMagnification={60} iconDistance={100}>
                <DockIcon
                  className="bg-black/10 dark:bg-white/10"
                  aria-label="Home"
                  role="button"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Home className="size-full" />
                </DockIcon>

                <DockIcon
                  className="bg-black/10 dark:bg-white/10"
                  aria-label="Settings"
                  role="button"
                  onClick={() => alert("Settings action")}
                >
                  <Settings className="size-full" />
                </DockIcon>

                <DockIcon
                  className="bg-black/10 dark:bg-white/10"
                  aria-label="Search"
                  role="button"
                  onClick={() => alert("Search action")}
                >
                  <Search className="size-full" />
                </DockIcon>
              </Dock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed: single Home FAB */}
      <AnimatePresence>
        {collapsed && (
          <motion.div
            key="collapsed-fab"
            className={baseWrap}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <button
              aria-label="Open dock"
              onClick={() => setOpen(true)}
              className="pointer-events-auto rounded-2xl backdrop-blur-md bg-black/10 dark:bg-white/10 shadow-lg border border-white/15 dark:border-white/10 p-3 md:p-3.5"
            >
              <Home className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay + dock sheet (slide from top) */}
      <AnimatePresence>
        {collapsed && open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="sheet"
              className="fixed inset-x-0 top-0 z-50"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="mx-auto max-w-screen-sm w-full">
                <div className="rounded-b-3xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl border-b border-white/20 shadow-2xl px-4 pt-6 pb-4">
                  {/* drag handle */}
                  <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-black/20 dark:bg-white/20" />

                  <div className="flex justify-center">
                    <Dock iconMagnification={60} iconDistance={100}>
                      <DockIcon
                        className="bg-black/10 dark:bg-white/10"
                        onClick={() => {
                          setOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <Home className="size-full" />
                      </DockIcon>
                      <DockIcon
                        className="bg-black/10 dark:bg-white/10"
                        onClick={() => {
                          setOpen(false);
                          alert("Settings action");
                        }}
                      >
                        <Settings className="size-full" />
                      </DockIcon>
                      <DockIcon
                        className="bg-black/10 dark:bg-white/10"
                        onClick={() => {
                          setOpen(false);
                          alert("Search action");
                        }}
                      >
                        <Search className="size-full" />
                      </DockIcon>
                    </Dock>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
