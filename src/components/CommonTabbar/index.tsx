import React, { memo } from "react";
import { Tabbar } from "react-vant";
import { routeConfig } from "../../routes/config";
import { useNavigate } from "react-router-dom";

const CommonTabbar: React.FC = memo(() => {
  const navigate = useNavigate();

  return (
    <div style={{ flexShrink: 0 }}>
      <Tabbar fixed={false}>
        {routeConfig.map((item) => {
          return (
            <Tabbar.Item
              icon={item.icon}
              key={item.path}
              onClick={() => navigate({ pathname: item.path })}
            >
              {item.name}
            </Tabbar.Item>
          );
        })}
      </Tabbar>
    </div>
  );
});

export default CommonTabbar;
