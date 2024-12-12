export const handleImageChange = async (event, setImage) => {
    const file = event.target.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await fetch('https://api.imgur.com/3/image', { 
          method: 'POST',
          headers: {
            Authorization: 'Bearer 6e5ec4fb5a9b150642e87bb9e4d41d7aa19b52c7', 
          },
        });
  
        const data = await response.json();
        setImage(data.data.link);  
  
      } catch (error) {
        console.log('Error during upload');
      }
    }
  };
  