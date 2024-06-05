/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-05 09:05:59
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-05 11:25:31
 * @FilePath: /PicImpact/app/upload/page.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import FileUpload from "~/components/admin/upload/FileUpload";
import DashHeader from "~/components/layout/DashHeader";

export default function Upload() {
  return (
    <div className="flex flex-col h-screen">
      <DashHeader />
      <div className="grid flex-1 sm:grid-cols-[200px_1fr] h-full w-full">
        <aside className="hidden w-[200px] flex-col sm:flex">
          Upload Your Wallpaper
        </aside>
        <main className="flex w-full h-full flex-1 flex-col p-2">
          <FileUpload />{" "}
        </main>
      </div>
    </div>
  );
}
