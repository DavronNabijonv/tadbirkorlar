import { EnFlag, RuFlag, UzFlag } from "@/assets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion } from "framer-motion"; // <-- Tuzatildi
import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu } from "lucide-react"; // <-- Hamburger menyusi uchun

function Navbar() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const handleChangeLang = (value: string) => {
    const segments = location.pathname.split("/");
    segments[1] = value;
    const newPath = segments.join("/");
    navigate(newPath);
  };

  return (
    <div>
      <nav className=" min-[380px]:p-4 min-[1000px]:pt-12 pt-8 max-[400px]:pt-2">
        <div className="main-container flex items-center justify-between">
          <Link to="" className="text-2xl font-bold text-[#0062AD]">
            {t.navbar.logoText}
          </Link>

          <ul className="hidden flex-row space-x-6 lg:flex">
            <li>
              <Link
                to={`/${lang}/about`}
                className="hover:text-lightBlue text-[18px] font-medium text-[#272F3A]"
              >
                {t.navbar.about}
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/events`}
                className="hover:text-lightBlue text-[18px] font-medium text-[#272F3A]"
              >
                {t.navbar.event}
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/news`}
                className="hover:text-lightBlue text-[18px] font-medium text-[#272F3A]"
              >
                {t.navbar.news}
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/contacts`}
                className="hover:text-lightBlue text-[18px] font-medium text-[#272F3A]"
              >
                {t.navbar.contact}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex h-full items-center justify-center">
              <Select
                value={lang}
                onValueChange={(value) => {
                  handleChangeLang(value);
                  setOpen(false);
                }}
              >
                <SelectTrigger
                  className="mt-0 w-[105px] cursor-pointer rounded-[26px] border-[#EFEFEF] border-1 px-3 py-1 text-[18px] text-black shadow-none ring-0 focus-visible:ring-0"
                  downIconClasses="text-black"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-darkBlue border-0 text-white">
                  <SelectGroup>
                    <SelectItem value="uz">
                      <img src={UzFlag} alt="Uzbekistan Flag" />
                      <span>UZ</span>
                    </SelectItem>
                    <SelectItem value="ru">
                      <img src={RuFlag} alt="Russian Flag" />
                      <span>RU</span>
                    </SelectItem>
                    <SelectItem value="eng">
                      <img src={EnFlag} alt="USA Flag" />
                      <span>Eng</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Hamburger menyusi tugmasi */}
            <button
              className="text-[#0062AD] lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            className="bg-darkBlue flex w-full flex-col justify-between border-0 sm:max-w-sm"
            closeIconClasses="text-white opacity-100 w-6 h-6 cursor-pointer"
          >
            <SheetHeader className="p-4 pt-9">
              <SheetTitle className="text-[23.21px] font-semibold text-white">
                {t.navbar.logoText}
              </SheetTitle>
              <div className="flex flex-col border-t border-[#010F3E] pt-6">
                <div className="flex flex-col gap-8">
                  <Link
                    to={`/${lang}/about`} // <-- Lang parametri qo'shildi
                    className="text-[18px] font-medium text-white"
                    onClick={() => setOpen(false)}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: "easeIn",
                        type: "spring",
                      }}
                    >
                      {t.navbar.about}
                    </motion.p>
                  </Link>
                  <Link
                    to={`/${lang}/events`} // <-- Lang parametri qo'shildi
                    className="text-[18px] font-medium text-white"
                    onClick={() => setOpen(false)}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeIn",
                        type: "spring",
                      }}
                    >
                      {t.navbar.event}
                    </motion.p>
                  </Link>
                  <Link
                    to={`/${lang}/news`} // <-- Lang parametri qo'shildi
                    className="text-[18px] font-medium text-white"
                    onClick={() => setOpen(false)}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeIn",
                        type: "spring",
                      }}
                    >
                      {t.navbar.news}
                    </motion.p>
                  </Link>
                  <Link
                    to={`/${lang}/contacts`} // <-- Lang parametri qo'shildi
                    className="text-[18px] font-medium text-white"
                    onClick={() => setOpen(false)}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: "easeIn",
                        type: "spring",
                      }}
                    >
                      {t.navbar.contact}
                    </motion.p>
                  </Link>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Navbar;
