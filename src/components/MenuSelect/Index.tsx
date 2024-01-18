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
    <div className="flex desktop:justify-between mt-4 mobile:flex-col mobile:gap-8 items-center">
      <div>
        <Menu
          onClick={onClick}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          selectedKeys={[current]}
          mode="inline"
          className="bg-[#131516] text-white rounded-[20px] px-6 py-4 w-[20rem] mobile:w-[18rem] desktop:w-[28rem] desktop:h-[34rem] mobile:flex mobile:flex-col"
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
                  <div className="flex gap-2 items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px]">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
          {cursos.length > 0 && (
            <Menu.SubMenu
              key="sub2"
              title="Cursos"
              className="text-[18px] font-bold leading-[24px] tracking-wider"
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
                  <div className="flex gap-2 items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px]">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
          {constultoria.length > 0 && (
            <Menu.SubMenu
              key="sub3"
              title="Consultoria"
              className="text-[18px] font-bold leading-[24px] tracking-wider"
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
                  <div className="flex gap-2 items-center">
                    <img src={item.img} className="w-[20px] h-[20px]" alt={item.title} />
                    <p className="text-[14px]">{item.title}</p>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
        </Menu>
      </div>
      <div className="flex flex-col desktop:gap-3 tablet:gap-[2.5rem] rounded-[1rem] bg-[#131516] border border-[#222729] desktop:w-[55rem] pl-3 tablet:mt-14 desktop:mt-0 mobile:w-[18rem] mobile:pl-1 mobile:px-1 mobile:gap-2">
        <div className="flex items-center mt-2">
          <img src={contentImg} alt={contentTitle} className="w-[22px] h-[22px]" />
          <p className="desktop:text-lg tablet:text-base">{contentTitle}</p>
        </div>
        <div>
          <div className="w-[25rem] font-bold mobile:w-full">
            <h1 className="desktop:text-3xl tablet:text-2xl mobile:text-xl mobile:font-bold">{contentDescription}</h1>
          </div>
        </div>
        <div className="w-[24rem] mobile:w-full">
          <p className="desktop:text-lg tablet:text-base">{content}</p>
        </div>
        <img
          src={contentPhoto}
          alt={contentTitle}
          className="rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px]"
        />
      </div>
    </div>
  );
};

export default MenuSelect;
