import axios from "axios";
const handleAddStudent = async (fetchData,setAddModalOpen,setNewActivity,newActivity) => {
    try {
      console.log(newActivity)
      const response = await axios.post("/api/admin/manage-users/student", newActivity);
      if (response.status === 200) {
        fetchData(); // Refresh list
        setAddModalOpen(false);
        setNewActivity({
          sid: "",  // ✅ Backend expects this, but form sends rollNo
    name: "",
    emailID: "",
    faid: "",
    did: "",
    deptPoints: "",
    institutePoints: "",
        });
      } else {
        alert("Error adding student info!");
      }
    } catch (error) {
      console.error("Error fetching student info", error);
      alert("Failed to fetch student info!");
    }
  };

  const handleAddFA = async (fetchFAData, setFAModalOpen, newFaculty,faculty) => {
    try {
        const response = await axios.post("/api/admin/manage-users/fa", faculty);
        if (response.status === 200) {
            fetchFAData(); // Refresh list
            setFAModalOpen(false);
            newFaculty({
              name:'',
              did:'',
              emailID:''
            });
        } else {
            alert("Error adding faculty info!");
        }
    } catch (error) {
        console.error("Error fetching faculty info", error);
        alert("Failed to fetch faculty info!");
    }
};
const handleEditStud = async (fetchData,setIsEditModalOpen,editStudent) => {
  try {
    console.log(editStudent);
    const response = await axios.put(`/api/admin/manage-users/student/${editStudent.sid}`, editStudent);
    if (response.status === 200) {
      fetchData(); // Refresh list
      setIsEditModalOpen(false);
    } else {
      alert("Error updating student record!");
    }
  } catch (error) {
    console.error("Error updating student record", error);
    alert("Failed to update student record!");
  }
};

const handleEditFa = async (fetchData,setIsEditModalOpen,editFa) => {
  try {
    console.log(editFa);
    const response = await axios.put(`/api/admin/manage-users/fa/${editFa.faid}`, editFa);
    if (response.status === 200) {
      fetchData(); // Refresh list
      setIsEditModalOpen(false);
    } else {
      alert("Error updating fa record!");
    }
  } catch (error) {
    console.error("Error updating fa record", error);
    alert("Failed to update fa record!");
  }
};


  export {handleAddStudent,handleAddFA,handleEditStud,handleEditFa};
