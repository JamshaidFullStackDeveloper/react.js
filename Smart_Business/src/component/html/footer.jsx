import "../css/footer.css"
import client1 from "../img/img/client-1.png"
import client2 from "../img/img/client-2.png"
import client3 from "../img/img/client-3.png"
import client4 from "../img/img/client-4.png"
import client5 from "../img/img/client-5.png"
import client6 from "../img/img/client-6.png"


function Footer() {
  return (
    <>
    <footer>
    <div className="f-contanir">
        <img src={client1} alt="" width="100" height="100"/>
        <img src={client2} alt="" width="100" height="100"/>
        <img src={client3} alt="" width="100" height="100"/> 
        <img src={client4} alt="" width="100" height="100"/>
        <img src={client5} alt="" width="100" height="100"/>
        <img src={client6} alt="" width="100" height="100"/>


    </div>

    <div className="f-contanir2" >
        <div className="f2-item">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione magni corrupti repudi</p>
            <p>Email:jamshaidjoiya992@gmail.com</p>
            <p>Phone:03058609606</p>
            <p>Adress: Lahore Pakistan</p>
        </div>
        <div className="f2-item">
            <label >
                Your name
            </label>
            <input type="text" className="input1" placeholder="Jamshaid Ali"/>
            <label className="lab" >
                Your Email
            </label> 
            <input type="text" className="input1 input3" placeholder="jamshaidjoiya99@gmail.com"/> 
             <label className="lab">Massage</label>
             <input type="text" className="input2"/>
             <button className="btn-4">Submit</button>
        </div>
    </div>


</footer>
    </>
  )
}

export default Footer
