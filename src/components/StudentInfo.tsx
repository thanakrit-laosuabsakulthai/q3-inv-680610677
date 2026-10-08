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
          <DrawerHeader>
            <DrawerTitle className="text-xl" >ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student information</DrawerDescription>
          </DrawerHeader>
          {/* <div className="flex-1 p-4">
            <div className="size-full rounded-2xl bg-muted">
            <img
              src="../../public/portrait.png"
              alt="Student"
              className="mx-auto object-cover"
            />
            </div>
          </div>
          <div className="flex-1 p-4">
            <p>Thanakrit Laosuabsakulthai</p>
            <p className="text-sm text-muted-foreground">นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 2 มหาวิทยาลัยเชียงใหม่</p>
            <div className="mt-4">
              <Badge variant="secondary" className="mr-2">Hobbies</Badge>
              เล่นเกม, ฟังเพลง, ดูหนัง, เขียนโปรแกรม
            </div>
            <div className="mt-4" >
              <Badge variant="secondary" className="mr-2">Email</Badge>
              thanakrit_la@cmu.ac.th
            </div>
            <div className="mt-4 break-all">
              <Badge variant="secondary" className="mr-2" >Social</Badge>
              facebook.com/thanakrit.laosuabsakulthai
            </div>
          </div>
          <div className="p-4 bg-muted mb-auto">
            <p className="text-sm">รหัสนักศึกษา 680610677</p>
          </div>
          <div className="flex-1" /> */}
          {/* use cards */}
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
          <div className="flex-1" />
          
          
          
          
          
          <DrawerFooter>
            <DrawerClose render={<Button>Close</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

/*
Footer คือ ส่วนแสดงข้อมูลของนักศึกษา โดยเมื่อคลิกปุ่มที่มี “ชื่อ-สกุล” ของนักศึกษา จะทำให้มี
การแสดงข้อมูลอื่นๆ ของนักศึกษาออกมาจากด้านข้างของหน้าเว็บโดยใช้Drawer component
โดยให้นักศึกษาใส่ รูปภาพ, คำอธิบายสั้นๆ, งานอดิเรก, CMU email, Social handle อยู่ภายใ


export function DrawerWithSides() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary">Open Left Drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

*/