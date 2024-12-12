import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@mui/joy';

import { patchDetails, getDetail, resetDetail } from "../jsonserver.js";

const Classic = () => {
  const [data, setData] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchDetails = async () => {
      const allDetails = await getDetail(id);
      if (allDetails && allDetails.details) {
        setSubmittedData(allDetails.details); 
      }
    };
    fetchDetails();
  }, [id]);
  
  useEffect(() => {
    if (submittedData.length > 0) {
      patchDetails(id, submittedData);
    }
  }, [submittedData, id]);

  const handleSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]); 
    setData('');
  };

  const handleReset = (id) => {
    resetDetail(id)
    setSubmittedData([])
  };

  const editorConfiguration = {
    licenseKey: 'GPL',
    toolbar: [
      'bold', 'italic', 'link',
      'bulletedList', 'numberedList', 'blockQuote',
      'insertTable', 'imageUpload', 'undo', 'redo'
    ],
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:side']
    },
    simpleUpload: {
			uploadUrl: 'https://api.imgur.com/3/',
    },
    headers: {
      Authorization: 'Client-ID aefbe54286d45bb'
    },
  };

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={data}
        onChange={(event, editor) => {
          const newData = editor.getData();
          setData(newData);
        }}
      />
      <Button onClick={() => handleSubmit(data)}>Submit</Button>
      <Button onClick={() => handleReset(id)}>Reset</Button>

      <div>
        {submittedData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default Classic;
