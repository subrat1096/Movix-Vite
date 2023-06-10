import { useState } from "react";
import PropTypes from "prop-types";
import "./SwitchTabs.scss";

function SwitchTabs({ data, onChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        {/* key and value are same in inline style */}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
}

SwitchTabs.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SwitchTabs;
