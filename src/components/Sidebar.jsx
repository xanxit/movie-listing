import sidebarItems from "../data/sidebardata";
const Sidebar = () => {
  return (
    <>
      <div className="lg:hidden block">
        <div className="w-full fixed bottom-0 z-50 bg-white">
          <div className="grid grid-cols-5 w-full px-3 pt-2 pb-4 border-t border-primaryBorder">
            {sidebarItems.map((item, idx) => (
              <a
                className={`flex lg:flex-row flex-col items-center group lg:py-[30px]`}
                href="#"
                key={idx}
              >
                <span className="relative group-hover:text-[#0D0D0D]">
                  <img src={item.icon} alt="sidebar item" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="!w-[118px] border-r flex-col flex-shrink-0 fixed h-screen pb-2 lg:flex justify-between hidden px-8 bg-white shadow-inner">
        <div className="relative my-3">
          <img alt="flexiple" width="55" height="55" src="https://www.kodo.com/wp-content/uploads/2022/07/kodo-logo.jpeg" />
        </div>
        <div className="flex flex-col justify-between items-start pl-4 h-full overflow-y-auto hide-scrollbar">
          <div className="mt-6">
            {sidebarItems.map((item, idx) => (
              <a
                className={`flex lg:flex-row flex-col items-center group lg:py-[30px]`}
                href="#"
                key={idx}
              >
                <span className="relative group-hover:text-[#0D0D0D]">
                  <img src={item.icon} alt="sidebar item" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
