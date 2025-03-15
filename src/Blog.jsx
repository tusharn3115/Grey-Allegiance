import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Blog() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveContent = () => {
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    console.log("Saved Content:", content);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <div className="border border-gray-300 p-2 rounded-md">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="editor-wrapper"
          editorClassName="editor-content p-2 min-h-[200px]"
          toolbarClassName="toolbar-class"
        />
      </div>
      <div className="mt-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
        {image && <img src={image} alt="Uploaded" className="mt-2 max-w-full h-auto rounded-md" />}
      </div>
      <button onClick={saveContent} className="mt-4 w-full">Save Blog</button>
    </div>
  );
}
