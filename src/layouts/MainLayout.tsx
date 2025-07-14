import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";

import dayjs from "dayjs";
import "dayjs/locale/en";
import updateLocale from "dayjs/plugin/updateLocale";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import "dayjs/locale/en";
import { ScrollToTop } from "@/lib/ScrollToTop";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});
dayjs.locale("en");

function MainLayout() {
  return (
    <ConfigProvider
      locale={enUS}
      theme={{
        token: { colorPrimary: "#0062AD" },
      }}
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
}

export default MainLayout;
