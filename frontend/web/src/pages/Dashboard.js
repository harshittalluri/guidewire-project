import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";


const data = [
  { day: "Mon", earnings: 600, city: 650 },
  { day: "Tue", earnings: 500, city: 600 },
  { day: "Wed", earnings: 700, city: 720 },
  { day: "Thu", earnings: 400, city: 500 },
  { day: "Fri", earnings: 800, city: 850 }
];


function Dashboard() {

  const { plan, premium } = useContext(AppContext);
  const navigate = useNavigate();

  return (

    <section className="scene active">

      <div className="scene-layout scene-2-layout">


        {/* STATS GRID */}

        <div className="dash-stats-grid">

          <motion.div className="dash-stat-card"
            whileHover={{ scale: 1.05 }}>
            <p className="dsc-label">Risk Level</p>

            <h3 className="risk-indicator medium">
              Medium
            </h3>
          </motion.div>


          <motion.div
            className="dash-stat-card clickable"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/pool")}
          >

            <p className="dsc-label">
              Community Pool
            </p>

            <h3 className="dsc-value">
              ₹1,50,000
            </h3>

            <span className="mini-link">
              view details →
            </span>

          </motion.div>


          <motion.div className="dash-stat-card"
            whileHover={{ scale: 1.05 }}>
            <p className="dsc-label">Policies</p>

            <h3 className="dsc-value">
              890
            </h3>
          </motion.div>


          <motion.div className="dash-stat-card"
            whileHover={{ scale: 1.05 }}>
            <p className="dsc-label">Fraud Alerts</p>

            <h3 className="dsc-value dsc-red">
              12
            </h3>
          </motion.div>


          <motion.div className="dash-stat-card"
            whileHover={{ scale: 1.05 }}>
            <p className="dsc-label">Active Plan</p>

            <h3 className="dsc-value">
              {plan || "Basic"}
            </h3>
          </motion.div>


          <motion.div className="dash-stat-card"
            whileHover={{ scale: 1.05 }}>
            <p className="dsc-label">Weekly Premium</p>

            <h3 className="dsc-value">
              ₹{premium || 29}
            </h3>
          </motion.div>

        </div>



        {/* GRAPH PANEL */}

        <motion.div
          className="dashboard-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h3 className="dp-title">
            Income Disruption Trend
          </h3>


          <ResponsiveContainer width="100%" height={260}>

            <BarChart data={data}>

              <CartesianGrid stroke="#e5e7eb" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />


              <Bar
                dataKey="city"
                fill="#d1d5db"
                name="Expected"
                radius={[6,6,0,0]}
              />


              <Bar
                dataKey="earnings"
                fill="#ef4444"
                name="Actual"
                radius={[6,6,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>



          {/* FOOTER */}

          <div className="dp-footer-row">

            <div className="dp-footer-stat">

              <span className="df-label">
                Trust Score
              </span>

              <span className="df-val green-text">
                98%
              </span>

            </div>

          </div>

        </motion.div>



      </div>

    </section>

  );

}

export default Dashboard;