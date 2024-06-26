import 'server-only'
import { updateImage } from '~/server/lib/operate'
import { NextRequest } from 'next/server'

export async function PUT(req: NextRequest) {
  const image = await req.json()
  if (!image.title) {
    return Response.json({
      code: 500,
      message: '图片标题不能为空！'
    })
  }
  if (!image.url) {
    return Response.json({
      code: 500,
      message: '图片链接不能为空！'
    })
  }
  if (!image.height || image.height <= 0) {
    return Response.json({
      code: 500,
      message: '图片高度不能为空且必须大于 0！'
    })
  }
  if (!image.width || image.width <= 0) {
    return Response.json({
      code: 500,
      message: '图片宽度不能为空且必须大于 0！'
    })
  }
  try {
    await updateImage(image);
    return Response.json({ code: 200, msg: '更新成功！' })
  } catch (e) {
    console.log(e)
    return Response.json({ code: 500, message: '更新失败！' })
  }
}