export const handleImageChange = async (event, setImage) => {
    const file = event.target.files[0];
  
    if (file) {      
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);  
    }
  };
  