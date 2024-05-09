import toast from "react-hot-toast";

const getAllnotes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/notes/get-all-notes"
    );
    if (!response) {
      console.log("Error in response of getallnotes");
      return;
    }

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error in getting all notes", error.message);
    toast.error("Error in getting notes");
    return;
  }
};

export default getAllnotes;

// useEffect(()=>{
//   setAllNotes(getAllnotes())
// },[])
