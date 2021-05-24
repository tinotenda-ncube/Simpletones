
import React, { useState } from 'react'
import {storage, db } from  "../firebase"
import "./admin.css"

const Admin = () => {
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState(0)
    const [materials, setmaterials] = useState('')
    const [id, setid] = useState(Date.now())
    const [image, setimage] = useState('')
   const [category, setcategory] = useState('')
    const [error, seterror] = useState('')

    const imgtypes =['image/png' , 'image/jpeg']
   
    const prodImageHandler=(e)=>{
        let selectedFile = e.target.files[0];
        if (selectedFile && imgtypes.includes(selectedFile.type)){
            setimage(selectedFile);

        } else{
            setimage(null);
            alert('wrong image format')
            seterror('')
        }
    }

    const addProducts=(e)=>{
        e.preventDefault();
        const uploadTask= storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress) 
        }, error=>{
            seterror(error.message)
        },()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                db.collection(category).add({
                    Name:name,
                    Description:description,
                    Price:parseFloat(price),
                    Materials:materials,
                    Id:id,
                    Image:url
                }).then(()=>{
                    setname('');
                    setdescription('');
                    setprice('');
                    setmaterials('');
                    setcategory('')
                    setid(Date.now());
                    setimage('');
                    seterror('');
                    document.getElementById('file').value='';
                }).catch(error=>seterror(error.message) )
            })
        })
    }


    return (
        <div className="admin-container">

           
            <div className="add-products">
            <h1>Hey Nicky: Welcome</h1>
            <h5>Add Your Poducts here and make money Boo</h5>
                <form action="" onSubmit={addProducts} className='form'>
                <div className="selector">
                    <label htmlFor='selector'>Category</label>
                    <select name="" id="selector"  onChange={(e)=>setcategory(e.target.value)} required>
                        <option >{null}</option>
                        <option >Featured Products</option>
                        <option >Menswear</option>
                        <option >Womenswear</option>
                        {/* <option >Hoodies</option>
                        <option >T-Shirts</option>
                        <option >Sweat Shirts</option>
                         */}
                    </select>
                    </div>
                    <div className="information">
                        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Item Name' required/>
                    <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description} placeholder='Item Description'required/>
                    <input type="number" onChange={(e)=>setprice(e.target.value)} value={price} placeholder='Item Price ' required/>
                    <textarea type="text" onChange={(e)=>setmaterials(e.target.value)} value={materials} rows="10" cols='30' placeholder='Item Materials'required/>
                    <input type="text" onChange={(e)=>setid(e.target.value)} value={id} placeholder='Production Number'/>
                    <input type="file" onChange={prodImageHandler} placeholder='Choose File'/>
                    </div>
                
                    

                    <button type="submit" >Submitt</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
