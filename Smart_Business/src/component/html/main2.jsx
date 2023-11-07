import "../css/main2.css"
import feature1 from "../img/img/feature-1.png"

function Main2() {
  return (
    <>
      
     <aside className="m-contanir2">
     <div className="m2-item">
         <h2>Take a look inside</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, labore?</p>
         <button className="btn1"> Learn More</button>
     </div>
     <div className="m2-item">
         <img src={feature1} alt="" width="100" height="100"/>
     </div>
  </aside>
    </>
  )
}

export default Main2
