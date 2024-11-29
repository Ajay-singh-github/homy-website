import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menuData } from "../constants/menu-data";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  const filteredMenu = menuData.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.items.some((dish) =>
        dish.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-white text-red-500">
      
      <main className="container mx-auto p-4">
        <ScrollArea className="h-12 whitespace-nowrap mb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="border-red-800 text-red-500 hover:bg-red-100"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="flex items-center space-x-2 w-full md:w-auto my-2">
        <Input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white text-red-500 w-full md:w-64"
        />
        <Button
          variant="outline"
          size="icon"
          className="bg-white text-red-500 hover:bg-red-100"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>
        <ScrollArea className="h-[calc(100vh-180px)]">
          <AnimatePresence>
            {filteredMenu.map((section) => (
              <motion.section
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-500 border-b-2 border-red-800 pb-2">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items
                    .filter((dish) =>
                      dish.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((dish) => (
                      <motion.div
                        key={dish}
                        whileHover={{ scale: 1.05 }}
                        className="bg-red-50 p-4 rounded-lg shadow-md transition-colors hover:bg-red-100"
                      >
                        {dish}
                      </motion.div>
                    ))}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>
        </ScrollArea>
      </main>
    </div>
  );
}
