import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { motion } from "framer-motion";

function Policy(){

const {plan,setPlan} = useContext(AppContext);

const plans = [

{
name:"Basic",
price:20,
desc:"Low risk coverage",
features:[
"Rain protection",
"Low demand cover",
"UPI payout"
]
},

{
name:"Moderate",
price:30,
desc:"Balanced coverage",
features:[
"Rain protection",
"Pollution cover",
"Demand drop cover",
"UPI payout"
]
},

{
name:"Premium",
price:50,
desc:"Full AI protection",
features:[
"Rain + heat cover",
"Accident protection",
"Demand drop cover",
"Priority payout",
"Peak bonus"
],
highlight:true
}

];



return(

<section className="scene active">

<div className="policy-container">

<h1 className="page-title">

Choose Protection Plan

</h1>



<div className="pricing-grid">

{plans.map(p=>{

const active = plan===p.name;

return(

<motion.div

key={p.name}

className={`price-card ${active?"active glow":""}`}

whileHover={{scale:1.04}}

onClick={()=>setPlan(p.name)}

>


{p.highlight && (

<div className="badge">

Recommended

</div>

)}



<h2>{p.name}</h2>


<h1>

₹{p.price}

<span>/week</span>

</h1>


<p className="muted">

{p.desc}

</p>


<ul>

{p.features.map(f=>(

<li key={f}>

✔ {f}

</li>

))}

</ul>


<button className="btn">

{active?"Selected":"Select Plan"}

</button>


</motion.div>

)

})}

</div>



<motion.div

className="reward-box"

initial={{opacity:0}}

animate={{opacity:1}}

>

🏆 {plan} Plan Active

</motion.div>


</div>

</section>

)

}

export default Policy;