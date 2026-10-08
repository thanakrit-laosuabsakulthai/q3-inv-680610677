import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "@/components/OverviewCards";
import { CategoryCards } from "@/components/CategoryCards";
import { useState } from "react";

// icon
import { Summary, LayoutGrid } from "lucide-react";



export function DashboardTabs() {
  const [ mode, setMode ] = useState<"overview" | "category">("overview");
  
  
  
  
  
  
  return (
    <div className="w-full">
      <Tabs
        value={mode}
        onValueChange={(v) => setMode(v as "overview" | "category")}
      >
        <TabsList>
          <TabsTrigger value="overview" className="text-base">
            <Summary className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="category" className="text-base">
            <LayoutGrid className="mr-2 h-4 w-4" />
            By Category
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-2">
          <OverviewCards />
        </TabsContent>
        <TabsContent value="category" className="pt-2">
          <CategoryCards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
