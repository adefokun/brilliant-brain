import { FormEvent, useEffect, useReducer, useState, useRef, useCallback } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { IAvailableScholarship, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import useImage from '@/hooks/useImage';
import TinyEditor from '@/components/Editor';
import { Editor as TinyMCEEditor } from 'tinymce';
import Image from 'next/image';

const initialState: IAvailableScholarship = {
    name: '',
    start: '',
    end: '',
    category: '',
    requirements: '',
}

type IAction = 'name' | 'requirements' | 'start' | 'end' | 'category' | 'reset' | 'update'


const EditScholarship = () => {
    const [loading, setLoading] = useState(false)
    const [scholarships, dispatch] = useReducer((state: IAvailableScholarship, action: IReducerAction<IAction>) => {
        if (action.type === 'reset') return initialState
        if (action.type === 'update') {
            if (typeof action.data !== 'string') 
            return { ...state, ...action.data }
        }
        return { ...state, [action.type]: action.payload }
    }, initialState)
    const { url, uploadImage, error: errorImage, progress, setError, loading: uploadingImage } = useImage()

    const editorRef = useRef<TinyMCEEditor | null>(null);

    const router = useRouter()    
    const { id } = router.query

    const { loading: posting, error, data, post } = usePost({ 
        api: `/scholarships/${id}`,
        method: 'PATCH',
        onSuccess: () => {
            toast('Scholarship Updated')
            dispatch({ type: 'reset'})
            // editorRef.current?.setContent('')
            router.push('/admin/scholarships')
        } 
    })

    const updateScholarship = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log({scholarships, content: editorRef.current?.getContent()})
        post(scholarships)
        // post({...scholarships, requirements: editorRef.current?.getContent()})
        // post(scholarships)
    }

    
    // useEffect(() => {
    //     if (url) {
    //         dispatch({ type: 'image', payload: url })
    //     }
    // }, [url])

    const fetchScholarship = useCallback(
        async () => {
            try {
              setLoading(true)
              const res = await fetch(`/api/scholarships/${id}`)
              const data = await res.json()
              
              if (!res.ok) throw new Error(data.message)
      
              // console.log({data})
              dispatch({ type: 'update', data: data })
            //   dispatch({ type: 'description', payload: editorRef.current?.getContent() })
            //   editorRef.current?.setContent(data.content)

            } catch (error) {
              console.log({error})
            }
            setLoading(false)
          },
      [id],
    )
     
    useEffect(() => {
        fetchScholarship()
      }, [id, fetchScholarship])
    

    return (
        <AdminLayout>
        <Head>
            <title>Brilliant Brains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(loading || posting || uploadingImage) && <Loader modalOpen={true} />}
        <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
            <div className="flex items-center gap-4 justify-between mb-16">
                <h1 className='text-3xl text-black/70 font-argentinum'>Edit Scholarship</h1>
                <Button onClick={() => router.push("/admin/scholarships")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">View Scholarships</Button>
            </div>
            <form className="flex flex-col gap-4" onSubmit={updateScholarship}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-black/70">Name</label>
                    <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={scholarships?.name} type="text" name="name" id="name" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category" className="text-black/70">Category</label>
                    <input required onChange={(e) => dispatch({ type: 'category', payload: e.target.value })} value={scholarships?.category} type="text" name="category" id="category" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="start" className="text-black/70">Start Date</label>
                    <input maxLength={120} required onChange={(e) => dispatch({ type: 'start', payload: e.target.value })} value={scholarships?.start} type="date" name="start" id="start" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="end" className="text-black/70">End Date</label>
                    <input maxLength={120} required onChange={(e) => dispatch({ type: 'end', payload: e.target.value })} value={scholarships?.end} type="date" name="end" id="end" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="requirements" className="text-black/70">Requirements</label>
                    {/* <TinyEditor editorRef={editorRef} /> */}
                    <textarea minLength={200} maxLength={450} rows={3} required onChange={(e) => dispatch({ type: 'requirements', payload: e.target.value })} value={scholarships?.requirements} name="requirements" id="requirements" className="border border-black/20 rounded-md p-2" />
                </div>
                {/* <div className="flex flex-col gap-1">
                        <span className="text-black/70">Upload Image</span>
                         {scholarships?.image &&
                            <Image width={100} height={100} src={scholarships?.image} alt="" className="h-24 w-24 bg-gray-100 object-cover z-10 relative" />
                         }
                        <input type='file' name='image' id='image' className='' onChange={(e) => uploadImage(e.target.files![0])}  />
                </div> */}
                <div className="flex items-center gap-4 mt-8">
                    <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-md text-sm">Update</Button>
                </div>
            </form>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(EditScholarship)
