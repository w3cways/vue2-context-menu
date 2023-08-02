import { PluginFunction } from "vue";
export interface IMenuItemOptions {
  label: string; //菜单项名称
  icon: string; //菜单项图标, 生成<i class="icon"></i>元素
  disabled: false; //是否禁用菜单项
  hidden: false; //是否隐藏菜单项
  divided: false; //是否显示分割线
  customClass: string; //自定义子菜单class, 使用.custom-class .menu_item定位菜单项
  minWidth: 150; //子菜单最小宽度
  onClick: Function; //菜单项点击事件
  children: IMenuItemOptions[]; //子菜单结构信息
}

export interface IMenuOptions {
  items: IMenuItemOptions[]; //菜单结构信息
  event: MouseEvent; //鼠标事件信息
  x: 0; //菜单显示X坐标, 存在event则失效
  y: 0; //菜单显示Y坐标, 存在event则失效
  zIndex: 2; //菜单样式z-index
  customClass?: string;
  minWidth: 150; //主菜单最小宽度
}

declare module "@w3cways/vue2-context-menu" {
  const Contextmenu: PluginFunction<any>;
  export default Contextmenu;
}
