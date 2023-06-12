import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

interface Props { 
    className?: string
    height?: number
    editorRef: React.MutableRefObject<TinyMCEEditor | null>
  } 

  
const TinyEditor = ({ height, className, editorRef }: Props) => {
    // console.log({pathname})

  return (
    <>
            <Editor
                apiKey='lfp1sibdc44a0qoqpita2999rwr01nnq7abmtwh1pnhb8boe'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=''
                init={{
                height: height || 300,
                // menubar: false,
                menubar: 'file edit view format tools table help',
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                    'print', 'paste', 'importcss', 'autosave', 'save', 'directionality', 'visualchars', 'template','codesample', 'hr', 'pagebreak', 'nonbreaking', 'toc', 'imagetools', 'textpattern', 'noneditable', 'charmap', 'quickbars', 'emoticons'
                ],
                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                // toolbar: 'undo redo | blocks | ' +
                //     'bold italic forecolor | alignleft aligncenter ' +
                //     'alignright alignjustify | bullist numlist outdent indent | ' +
                //     'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                
                }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
            </>
  )
}

export default TinyEditor