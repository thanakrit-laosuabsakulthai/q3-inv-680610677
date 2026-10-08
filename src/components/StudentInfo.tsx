import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button>Thanakrit Laosuabsakulthai</Button>} />
        <DrawerContent>
          <div className="flex-1 overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle className="text-xl" >ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student information</DrawerDescription>
          </DrawerHeader>
            <Card className="m-2 pt-0">
              <div className="inset-0">
                <img
                  src="../../public/portrait.png"
                  alt="Student"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Thanakrit Laosuabsakulthai</CardTitle>
                <CardDescription>นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 2 มหาวิทยาลัยเชียงใหม่</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">Hobbies</Badge>
                    <span>เล่นเกม, ฟังเพลง, ดูหนัง, เขียนโปรแกรม</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">Email</Badge>
                    <span>thanakrit_la@cmu.ac.th</span>
                  </div>
                  <div className="flex items-center gap-1 break-all">
                    <Badge variant="secondary">Social</Badge>
                    <span>facebook.com/thanakrit.laosuabsakulthai</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm">รหัสนักศึกษา 680610677</p>
              </CardFooter>
            </Card>
          </div>
          
          <DrawerFooter>
            <DrawerClose render={<Button>Close</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}