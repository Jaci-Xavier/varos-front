import React, { useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { carteiras, cursos, constultoria } from '../../constants/Constants';

interface MenuItems {
  title: string;
  img: string;
  description: string;
  key: number;
  content: string;
  photo: string;
  menu: number;
}

const MenuSelect: React.FC = () => {
  const allItems: MenuItems[] = [...carteiras, ...cursos, ...constultoria];
  const [current, setCurrent] = useState<string>('0');
  const [contentImg, setContentImg] = useState<string>(`${allItems[0].img}`);
  const [contentDescription, setContentDescription] = useState<string>(
    `${allItems[0].description}`,
  );
  const [contentTitle, setContentTitle] = useState<string>(`${allItems[0].title}`);
  const [content, setContent] = useState<string>(`${allItems[0].content}`);
  const [contentPhoto, setContentPhoto] = useState<string>(`${allItems[0].photo}`);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    const key = e.key as string;
    setCurrent(key);
    setContentImg(allItems.find((item) => item.key.toString() === key)?.img || '');
    setContentDescription(allItems.find((item) => item.key.toString() === key)?.description || '');
    setContentTitle(allItems.find((item) => item.key.toString() === key)?.title || '');
    setContent(allItems.find((item) => item.key.toString() === key)?.content || '');
    setContentPhoto(allItems.find((item) => item.key.toString() === key)?.photo || '');
  };

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <div className="w-[98vw] flex flex-row justify-around">
      <div className="mt-[10px] ml-[70px] w-[274px] h-[590px]">
        <Menu
          onClick={onClick}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          selectedKeys={[current]}
          mode="inline"
          className="bg-[#131516] text-white w-[270px] rounded-[20px]"
        >
          {carteiras.length > 0 && (
            <Menu.SubMenu
              key="sub1"
              title="Carteiras"
              className="text-[18px] font-bold leading-[24px] tracking-wider"
            >
              {carteiras.map((item) => (
                <Menu.Item
                  key={`${item.key}`}
                  className={`flex justify-around ${
                    current === `${item.key}` ? 'bg-[#222729]' : ''
                  }`}
                  style={{
                    backgroundColor: current === `${item.key}` ? '#222729' : 'transparent',
                    height: '56px',
                  }}
                >
                  <div className="flex flex-row items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px] leading-4 ml-1">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
          {cursos.length > 0 && (
            <Menu.SubMenu
              key="sub2"
              title="Cursos"
              className="text-[18px] font-bold leading-[24px] tracking-widest text-left"
            >
              {cursos.map((item) => (
                <Menu.Item
                  key={`${item.key}`}
                  className={`flex justify-around ${
                    current === `${item.key}` ? 'bg-[#222729]' : ''
                  }`}
                  style={{
                    backgroundColor: current === `${item.key}` ? '#222729' : 'transparent',
                    height: '56px',
                  }}
                >
                  <div className="flex flex-row items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px] leading-4 ml-1">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
          {constultoria.length > 0 && (
            <Menu.SubMenu
              key="sub3"
              title="Consultoria"
              className="text-[18px] font-bold leading-[24px] tracking-widest text-left"
            >
              {constultoria.map((item) => (
                <Menu.Item
                  key={`${item.key}`}
                  className={`flex justify-around ${
                    current === `${item.key}` ? 'bg-[#222729]' : ''
                  }`}
                  style={{
                    backgroundColor: current === `${item.key}` ? '#222729' : 'transparent',
                    height: '56px',
                  }}
                >
                  <div className="flex flex-row items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px] leading-4 ml-1">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
        </Menu>
      </div>
      <div id="72" className="w-[662px] h-[536px] mt-[10px] flex flex-col">
        <div className="flex flex-row mt-4 items-center text-center w-[280px] h-[56px]">
          <img src={contentImg} alt={contentTitle} className="w-[22px] h-[22px] p-0 ml-4" />
          <p className="ml-[12px] self-center font-semibold">{contentTitle}</p>
        </div>
        <div className="ml-4">
          <div className="w-[400px] h-[60px] size-8 font-semibold text-base leading-[28px]">
            <h1 className="text-2xl">{contentDescription}</h1>
          </div>
        </div>
        <div className="w-[430px]">
          <h1 className="mt-6 ml-4 text-base">{content}</h1>
        </div>
        <img
          src={contentPhoto}
          alt={contentTitle}
          className="w-[621px] h-[329px] mt-2 ml-4 rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px]"
        />
      </div>
    </div>
  );
};

export default MenuSelect;
