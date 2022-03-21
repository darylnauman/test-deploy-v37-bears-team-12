import Link from "next/link";
import { TrashIcon } from '@heroicons/react/solid'

export default function NotesCard({ id, title, created_at, content }) {
    let contentPreview;
    if (content.length > 250) {
        contentPreview = content.slice(0, 250) + " ...";
    } else {
        contentPreview = content;
    }

    let date = new Date(created_at);
    date = date.toLocaleDateString("en-US");

    function deleteNoteConfirm() {
        let input = confirm("Are you sure you wish to delete this note?");
        if (input) {            
            const deleteNote = async () => {
                const res = await fetch(
                    `https://bwnxxxhdcgewlvmpwdkl.supabase.co/rest/v1/notes?id=eq.${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
                        },
                    }
                );
                location.reload();
            };
            deleteNote();
        }
    }

    return (
        <div className="text-white my-5 m-3 p-3 w-11/12 bg-gray-500 rounded-2xl transition duration-700 ease-in-out hover:bg-gray-700 hover:scale-105">
            <Link href={`/notes/${id}`}>
                <a className= "hover:font-semibold text-lg">{title}</a>
            </Link>
            <h3 className="">{date}</h3>
            <div>{contentPreview}</div>
            <button onClick={deleteNoteConfirm}>
                <TrashIcon className="h-6 w-6 hover:text-red-600"/>
            </button>
        </div>
    );
}
