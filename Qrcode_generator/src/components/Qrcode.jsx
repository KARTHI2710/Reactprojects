import { useState } from 'react'
import '../css/Qrcode.css'


const Qrcode = () => {

  const [img,setImg] =  useState("")
  const [loading,setLoading] = useState(false)

  const [qrdata,setQrdata] = useState("")
  const [qrsize,setQrsize] = useState("")
  
  

  async function generateqrcode(){
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`
            setImg(url)

        }catch(error){
             console.log("error occured",error);
        }finally{
             setLoading(false)
        }
  }
  function downloadqrcode(){
        fetch(img)
           .then((response) => response.blob())
           .then((blob)=>{
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
           });
  }
  
  return (
    <div className='container'>
      <h5>QRcode generator</h5>
      {img && <img src={img} alt="" className='img_container'/>}
      {loading && <h3>Please wait loading</h3>}
      <div className='form-content'>
        <div className="form-group">
            <label htmlFor="qrcontent" className='formlabel' >Data for QR code</label>
            <input type="text" id="qrcontent" className='formcontrol' value={qrdata} onChange={(e)=>setQrdata(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="qrsize" className='formlabel' >Size for QR code</label>
            <input type="text" id="qrsize" className='formcontrol' value={qrsize} onChange={(e)=>setQrsize(e.target.value)} />
        </div>
        <div className="btn-container">
            <button className='generate-qrcode-btn btn' onClick={generateqrcode} disabled={loading}>Generate QR Code</button>
            <button className='download-btn btn' onClick={downloadqrcode}>Download QR Code</button>
        </div>
      </div>
    </div>
  )
}

export default Qrcode
