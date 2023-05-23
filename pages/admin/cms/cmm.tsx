import { useEffect, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Table from '@/components/Table'
import { ICms } from "@/interfaces"
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';



const CMS = () => {
  const [data, setData] = useState<ICms[]>([])
  const router = useRouter()

  const { loading, error, post, data: deleted } = usePost({ 
    api: "/cms",
    method: "DELETE",
    onSuccess: () => {
        toast('dEleted successfully')
    } 
})

const deleteCms = (id: string, route: string) => {
    post({
      id,
    }, route)
}




const colums = [
  {
    name: "identifier",
    label: "Title",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "edit",
    label: "Action",
    extra: true,
    custom: (val: string, meta: any) => {
      return  (
        <div className="gap-4 justify-center">
          <Button onClick={() => router.push(`/admin/cms/${meta?._id}`)} className="p-2 px-4 text-white rounded-full">Edit</Button>
          {/* <BiEdit size="1.2rem" className="text-orange" />
          <MdOutlineDelete size="1.2rem" className="text-red-400" /> */}
        </div>
      )
    },
  },
];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cms`)
        const data = await res.json()
        
        if (!res.ok) throw new Error(data.message)

        console.log({data})
        setData(data)
      } catch (error) {
        console.log({error})
      }

    }

    fetchUser()
  }, [deleted])

  return (
    <AdminLayout>
      <Head>
        <title>Brilliant Brains</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      {loading && <Loader modalOpen={true} />}
      <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
        <div className="flex items-center gap-4 justify-between mb-16">
            <h1 className='text-3xl text-black/70 font-argentinum'>Content Management System</h1>
            {/* <Button onClick={() => router.push("/admin/cms/add")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm whitespace-nowrap">Add Board Member</Button> */}
        </div>
        <Table<ICms> data={data} columns={colums} className={''} />
      </div>
    </AdminLayout>
  );
}


export default AuthHOC(CMS)

