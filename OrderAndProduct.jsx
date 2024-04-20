import React from 'react';
import { AiOutlineFileText } from "react-icons/ai";

const OrderAndProduct = () => {
  return (
    <div style={{ marginLeft:"10rem",marginRight:"10rem",marginTop:"3rem",letterSpacing:"0.5px" }}>
      <div>
        <h2 style={{
          fontSize:"1.5rem",fontWeight:"600", marginBottom:"1rem"

        }}>Order and Product</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' ,padding:"2px"}}>
          {/* Content for the first column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem" }}>Our Products</h2>
            <div style={{}}>
              <p style={{fontSize:"14px",marginBottom:".75rem" ,display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Do you sell Body Jewellery?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Do you have jewellery for kids?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Pricing Issues</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>What styles are best for sensitive skin?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Is your jewellery waterproof?</p>
            </div>
          </div>
          {/* Content for the second column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem" }}>Incorrect Size</h2>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>The item I received is the wrong size.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' ,padding:"2px" ,marginTop:"2.5rem"}}>
          {/* Content for the first column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem"  }}>Faulty Items</h2>
            <div style={{}}>
              <p style={{fontSize:"14px",marginBottom:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>My item is now faulty, what should I do?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I received a broken or faulty item.</p>
              
            </div>
            
          </div>
          {/* Content for the second column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600" }}>Order Issue</h2>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I received the wrong item, what should I do?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>My item arrived damaged, how do I return it?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I received the wrong order, what should I do?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Why was I partially refunded?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I am missing an item from my order, what should I do?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Why was I partially refunded?</p>
            </div>
            
          </div>
        </div>

      
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' ,padding:"2px", marginTop:"3rem"}}>
          {/* Content for the first column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"0.4rem" }}>Cancel or Amend</h2>
            <div style={{}}>
              <p style={{fontSize:"14px",marginBottom:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I need to change my delivery address.</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Can I add or remove items from my order?</p>
              <hr style={{ width: "calc(100% - 6.5rem)", margin: "0" }} />
            </div>
            <div>
              <p style={{fontSize:"14px",marginBottom:"4rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"16px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Can I cancel an order?</p>
              
            </div>
           
          </div>
         
           
        </div>

        

      </div>
    </div>
  );
};

export default OrderAndProduct;
