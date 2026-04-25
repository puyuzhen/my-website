// ── 数据 ──────────────────────────────────────────────────────
const AREAS = [100,200,300,400,500,600,800,1000,1500,2000,3000,5000,10000];

const MOD = {
  reception:  {name:'前台区',    color:'#F0EAF8',stroke:'#7050a0',icon:'🏠'},
  workstation:{name:'工位区',    color:'#EEF4EE',stroke:'#5a8a5a',icon:'🖥️'},
  openSpace:  {name:'开放协作区',color:'#E0F5E0',stroke:'#308030',icon:'💬'},
  meeting:    {name:'会议室',    color:'#EAF0F8',stroke:'#4a72a8',icon:'👥'},
  manager:    {name:'经理室',    color:'#F5F0E8',stroke:'#a08040',icon:'👔'},
  lounge:     {name:'休闲区',    color:'#EAF5EA',stroke:'#4a9a4a',icon:'☕'},
  waterbar:   {name:'水吧区',    color:'#FDF0E0',stroke:'#c07820',icon:'🍵'},
  phoneBooth: {name:'电话亭',    color:'#F8E8E8',stroke:'#a04040',icon:'📞'},
  toilet:     {name:'卫生间',    color:'#E0E8F0',stroke:'#507090',icon:'🚻'},
  storage:    {name:'储藏室',    color:'#EBEBEB',stroke:'#707070',icon:'📦'},
  server:     {name:'机房',      color:'#D8E4EC',stroke:'#305870',icon:'🖧'},
  corridor:   {name:'走廊',      color:'#F5F5F0',stroke:'#aaaaaa',icon:'➡️'}
};

const DETAILS = {
  reception:  {title:'前台区',    desc:'企业形象展示与访客接待',    features:['接待台','等候区','企业展示墙','智能预约系统','访客登记'],    capacity:'12-25㎡，含接待与等候',    design:'体现企业文化，配备智能访客系统，视觉效果突出'},
  workstation:{title:'工位区',    desc:'员工日常办公主要区域',      features:['可调节高度办公桌','人体工学椅','储物柜','显示屏支架','护眼LED灯'], capacity:'每工位约2-3㎡，可容纳1人', design:'开放式与半开放式结合，配备绿植隔断，静音地毯'},
  openSpace:  {title:'开放协作区',desc:'非正式会议、头脑风暴',      features:['灵活座椅','白板墙','显示屏','隔音舱','移动白板'],           capacity:'20-50㎡',                  design:'打破传统布局，支持站立会议，促进创意碰撞'},
  meeting:    {title:'会议室',    desc:'会议、培训、演示等集体活动', features:['视频会议系统','投影/白板','音响设备','智能灯光','空气净化器'],capacity:'小型4-6人、中型8-12人、大型20人以上', design:'隔音处理，可调节灯光，支持多种会议模式'},
  manager:    {title:'经理室',    desc:'管理层独立办公室',          features:['独立卫生间','mini bar','会客区','书柜','智能门禁'],          capacity:'15-30㎡，含独立办公与会客区', design:'私密性强，配备智能家居系统'},
  lounge:     {title:'休闲区',    desc:'员工休息、放松、社交空间',   features:['咖啡吧台','沙发卡座','游戏设备','阅读角','绿植墙'],         capacity:'占总面积5-10%',            design:'温馨舒适，色彩活泼，配备咖啡机、饮水机'},
  waterbar:   {title:'水吧区',    desc:'饮水、冲泡饮品、小食存放',   features:['直饮水机','咖啡机','冰箱','微波炉','储物柜'],              capacity:'10-20㎡，服务50-100人',    design:'靠近休息区，配备完善给排水系统'},
  phoneBooth: {title:'电话亭',    desc:'私密通话、视频会议空间',     features:['隔音材料','通风系统','照明控制','电源插座','吸音棉'],       capacity:'4-8㎡，可容纳1-2人',       design:'独立舱体，移动便捷，良好隔音与通风'},
  toilet:     {title:'卫生间',    desc:'员工卫生设施',              features:['智能马桶','洗手液分配器','烘手器','母婴室','无障碍设施'],   capacity:'按人数配置，男女分厕',      design:'干湿分离，配备除臭系统，整洁明亮'},
  storage:    {title:'储藏室',    desc:'办公用品、设备存储',         features:['货架系统','密集柜','防潮处理','消防设施','门禁管理'],       capacity:'8-15㎡',                   design:'合理利用空间，分类存储，温湿度控制'},
  server:     {title:'机房',      desc:'服务器、网络设备存放',       features:['精密空调','UPS电源','消防系统','防静电地板','环境监控'],    capacity:'10-30㎡',                  design:'专业级环境控制，24小时监控'},
  corridor:   {title:'走廊',      desc:'连接各功能区的交通空间',     features:['智能照明','引导标识','安全出口','消防栓','绿植装饰'],       capacity:'宽度1.2-2米',              design:'宽敞明亮，融入企业文化元素'}
};

const STYLES = [
  {
    id:'modern', name:'现代简约', desc:'简洁大气，注重功能性与空间感',
    cover:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    tags:['极简线条','自然采光','中性色调','大面积留白'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop',cap:'开放式办公区'},
      {url:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&fit=crop',cap:'会议室'},
      {url:'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&fit=crop',cap:'前台接待'},
      {url:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&fit=crop',cap:'休闲区'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'独立办公室'},
      {url:'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&fit=crop',cap:'走廊过道'},
      {url:'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&fit=crop',cap:'工位区细节'},
      {url:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&fit=crop',cap:'整体空间'},
      {url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&fit=crop',cap:'协作空间'},
      {url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&fit=crop',cap:'水吧区'},
      {url:'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&fit=crop',cap:'经理室'},
      {url:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&fit=crop',cap:'全景俯视'}
    ]
  },
  {
    id:'creative', name:'创意工作室', desc:'色彩丰富，激发创意灵感',
    cover:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags:['大胆配色','趣味造型','灵活空间','艺术装置'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',cap:'创意工作区'},
      {url:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&fit=crop',cap:'头脑风暴室'},
      {url:'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&fit=crop',cap:'彩色会议室'},
      {url:'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&fit=crop',cap:'开放协作区'},
      {url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&fit=crop',cap:'互动展示墙'},
      {url:'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&fit=crop',cap:'创意休闲角'},
      {url:'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',cap:'团队工位'},
      {url:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop',cap:'协作讨论区'},
      {url:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop',cap:'艺术装置'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'色彩工位'},
      {url:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&fit=crop',cap:'休息空间'},
      {url:'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&fit=crop',cap:'前台设计'}
    ]
  },
  {
    id:'nordic', name:'北欧风格', desc:'温暖木质，自然舒适',
    cover:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
    tags:['木质元素','白色基调','绿植点缀','柔软织物'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&fit=crop',cap:'北欧工位区'},
      {url:'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&fit=crop',cap:'木质会议室'},
      {url:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&fit=crop',cap:'绿植休闲区'},
      {url:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&fit=crop',cap:'白色开放区'},
      {url:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop',cap:'自然采光'},
      {url:'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&fit=crop',cap:'木质前台'},
      {url:'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&fit=crop',cap:'温暖工位'},
      {url:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&fit=crop',cap:'阅读角'},
      {url:'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&fit=crop',cap:'经理室'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'协作空间'},
      {url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&fit=crop',cap:'水吧区'},
      {url:'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&fit=crop',cap:'整体空间'}
    ]
  },
  {
    id:'industrial', name:'工业风格', desc:'粗犷个性，彰显品味',
    cover:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop',
    tags:['裸露管道','砖墙元素','金属质感','复古灯具'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&fit=crop',cap:'工业风工位'},
      {url:'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&fit=crop',cap:'裸露砖墙'},
      {url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&fit=crop',cap:'金属结构'},
      {url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&fit=crop',cap:'复古会议室'},
      {url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&fit=crop',cap:'工业风前台'},
      {url:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&fit=crop',cap:'管道装饰'},
      {url:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',cap:'开放工作区'},
      {url:'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&fit=crop',cap:'休闲吧台'},
      {url:'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',cap:'协作空间'},
      {url:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&fit=crop',cap:'整体俯视'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'经理室'},
      {url:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop',cap:'团队区域'}
    ]
  },
  {
    id:'luxury', name:'高端商务', desc:'沉稳大气，彰显实力',
    cover:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    tags:['石材运用','真皮家具','智能系统','艺术品装饰'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&fit=crop',cap:'高端大堂'},
      {url:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',cap:'商务会议室'},
      {url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&fit=crop',cap:'总裁办公室'},
      {url:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&fit=crop',cap:'贵宾接待区'},
      {url:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&fit=crop',cap:'石材前台'},
      {url:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop',cap:'高端工位'},
      {url:'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&fit=crop',cap:'艺术走廊'},
      {url:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&fit=crop',cap:'董事会议室'},
      {url:'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&fit=crop',cap:'休闲会客区'},
      {url:'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&fit=crop',cap:'精品水吧'},
      {url:'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&fit=crop',cap:'整体空间'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'全景俯视'}
    ]
  },
  {
    id:'tech', name:'科技智能', desc:'智能办公，未来已来',
    cover:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    tags:['智能控制','IoT设备','数据可视化','绿色节能'],
    gallery:[
      {url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&fit=crop',cap:'智能工位'},
      {url:'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&fit=crop',cap:'数据中心'},
      {url:'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&fit=crop',cap:'智能会议室'},
      {url:'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',cap:'协作大屏'},
      {url:'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&fit=crop',cap:'科技前台'},
      {url:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&fit=crop',cap:'创新实验室'},
      {url:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop',cap:'团队协作区'},
      {url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&fit=crop',cap:'智能休闲区'},
      {url:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&fit=crop',cap:'开放工作区'},
      {url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&fit=crop',cap:'电话亭'},
      {url:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&fit=crop',cap:'整体俯视'},
      {url:'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&fit=crop',cap:'未来感走廊'}
    ]
  }
];

let currentArea = 100;

// ── 初始化 ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAreaButtons();
  initStylesGrid();
  generateLayout(currentArea);
  initNavigation();
});

// ── 面积按钮 ──────────────────────────────────────────────────
function initAreaButtons() {
  const c = document.getElementById('areaButtons');
  c.innerHTML = AREAS.map(a => `<button class="area-btn${a===currentArea?' active':''}" data-area="${a}">${a}㎡</button>`).join('');
  c.addEventListener('click', e => {
    if (!e.target.classList.contains('area-btn')) return;
    document.querySelectorAll('.area-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentArea = parseInt(e.target.dataset.area);
    document.getElementById('currentAreaDisplay').textContent = currentArea + '㎡';
    generateLayout(currentArea);
  });
}

// ── 布局生成 ──────────────────────────────────────────────────
function generateLayout(area) {
  const mods = calcModules(area);
  renderFloorPlan(mods, area);
  renderModulesList(mods);
}

function calcModules(area) {
  const list = [];
  if (area < 200) {
    list.push({key:'reception',  ...MOD.reception,  size:Math.round(area*0.06), pct:0.06});
    list.push({key:'workstation',...MOD.workstation,size:Math.round(area*0.42), pct:0.42});
    list.push({key:'meeting',    ...MOD.meeting,    size:Math.round(area*0.14), pct:0.14});
    list.push({key:'manager',    ...MOD.manager,    size:Math.round(area*0.10), pct:0.10});
    list.push({key:'lounge',     ...MOD.lounge,     size:Math.round(area*0.08), pct:0.08});
    list.push({key:'toilet',     ...MOD.toilet,     size:Math.round(area*0.06), pct:0.06});
    list.push({key:'storage',    ...MOD.storage,    size:Math.round(area*0.06), pct:0.06});
  } else if (area < 500) {
    list.push({key:'reception',  ...MOD.reception,  size:Math.round(area*0.05), pct:0.05});
    list.push({key:'workstation',...MOD.workstation,size:Math.round(area*0.38), pct:0.38});
    list.push({key:'openSpace',  ...MOD.openSpace,  size:Math.round(area*0.08), pct:0.08});
    list.push({key:'meeting',    ...MOD.meeting,    size:Math.round(area*0.12), pct:0.12});
    list.push({key:'manager',    ...MOD.manager,    size:Math.round(area*0.08), pct:0.08});
    list.push({key:'lounge',     ...MOD.lounge,     size:Math.round(area*0.07), pct:0.07});
    list.push({key:'waterbar',   ...MOD.waterbar,   size:Math.round(area*0.04), pct:0.04});
    list.push({key:'toilet',     ...MOD.toilet,     size:Math.round(area*0.06), pct:0.06});
    list.push({key:'storage',    ...MOD.storage,    size:Math.round(area*0.04), pct:0.04});
  } else if (area < 1500) {
    list.push({key:'reception',  ...MOD.reception,  size:Math.round(area*0.04), pct:0.04});
    list.push({key:'workstation',...MOD.workstation,size:Math.round(area*0.36), pct:0.36});
    list.push({key:'openSpace',  ...MOD.openSpace,  size:Math.round(area*0.08), pct:0.08});
    list.push({key:'meeting',    ...MOD.meeting,    size:Math.round(area*0.12), pct:0.12});
    list.push({key:'manager',    ...MOD.manager,    size:Math.round(area*0.07), pct:0.07});
    list.push({key:'lounge',     ...MOD.lounge,     size:Math.round(area*0.07), pct:0.07});
    list.push({key:'waterbar',   ...MOD.waterbar,   size:Math.round(area*0.04), pct:0.04});
    list.push({key:'phoneBooth', ...MOD.phoneBooth, size:Math.round(area*0.03), pct:0.03});
    list.push({key:'toilet',     ...MOD.toilet,     size:Math.round(area*0.05), pct:0.05});
    list.push({key:'storage',    ...MOD.storage,    size:Math.round(area*0.03), pct:0.03});
    list.push({key:'server',     ...MOD.server,     size:Math.round(area*0.03), pct:0.03});
  } else {
    list.push({key:'reception',  ...MOD.reception,  size:Math.round(area*0.04), pct:0.04});
    list.push({key:'workstation',...MOD.workstation,size:Math.round(area*0.34), pct:0.34});
    list.push({key:'openSpace',  ...MOD.openSpace,  size:Math.round(area*0.09), pct:0.09});
    list.push({key:'meeting',    ...MOD.meeting,    size:Math.round(area*0.12), pct:0.12});
    list.push({key:'manager',    ...MOD.manager,    size:Math.round(area*0.06), pct:0.06});
    list.push({key:'lounge',     ...MOD.lounge,     size:Math.round(area*0.07), pct:0.07});
    list.push({key:'waterbar',   ...MOD.waterbar,   size:Math.round(area*0.04), pct:0.04});
    list.push({key:'phoneBooth', ...MOD.phoneBooth, size:Math.round(area*0.03), pct:0.03});
    list.push({key:'toilet',     ...MOD.toilet,     size:Math.round(area*0.05), pct:0.05});
    list.push({key:'storage',    ...MOD.storage,    size:Math.round(area*0.03), pct:0.03});
    list.push({key:'server',     ...MOD.server,     size:Math.round(area*0.03), pct:0.03});
  }
  list.push({key:'corridor', ...MOD.corridor, size:Math.round(area*0.08), pct:0.08});
  return list;
}

// ── 专业平面图渲染（参考建筑平面图风格）────────────────────────
function renderFloorPlan(mods, area) {
  const W = 900, H = 580;
  const PAD = 48;
  const iW = W - PAD*2, iH = H - PAD*2;

  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif;background:#f5f3ef">`;
  s += `<rect width="${W}" height="${H}" fill="#f5f3ef"/>`;

  // 建筑外轮廓填充
  s += `<rect x="${PAD}" y="${PAD}" width="${iW}" height="${iH}" fill="#ffffff" stroke="none"/>`;

  // 生成布局
  const rooms = buildLayout(mods, area, iW, iH, PAD);

  // 先画房间填充
  rooms.forEach(r => { s += drawRoomFill(r); });
  // 再画家具
  rooms.forEach(r => { s += drawFurniture(r.x, r.y, r.w, r.h, r.key); });
  // 再画墙线（覆盖在家具上）
  rooms.forEach(r => { s += drawRoomWalls(r); });
  // 最后画标签
  rooms.forEach(r => { s += drawRoomLabel(r); });
  // 点击层
  rooms.forEach(r => { s += drawRoomHit(r); });

  // 外墙（最粗）
  s += `<rect x="${PAD}" y="${PAD}" width="${iW}" height="${iH}" fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linejoin="miter"/>`;

  // 四角结构柱（黑色方块，参考图特征）
  const colSize = 10;
  [[PAD,PAD],[PAD+iW-colSize,PAD],[PAD,PAD+iH-colSize],[PAD+iW-colSize,PAD+iH-colSize]].forEach(([cx,cy])=>{
    s += `<rect x="${cx}" y="${cy}" width="${colSize}" height="${colSize}" fill="#1a1a1a"/>`;
  });

  // 尺寸标注
  const mW = Math.sqrt(area*1.3).toFixed(1);
  const mH = (area/parseFloat(mW)).toFixed(1);
  s += dimLine(PAD, H-PAD+16, PAD+iW, H-PAD+16, `${mW}m`);
  s += dimLine(PAD-16, PAD, PAD-16, PAD+iH, `${mH}m`, true);

  // 指北针
  s += compass(W-PAD-24, PAD+28);
  // 比例尺
  s += scaleBar(PAD+8, H-PAD+22, area);

  s += '</svg>';
  document.getElementById('layoutCanvas').innerHTML = s;
  document.querySelectorAll('.room-hit').forEach(el => {
    el.addEventListener('click', () => openModuleModal(el.dataset.key));
  });
}

// ── 布局构建（参考图：中央核心筒 + 四周工位 + 独立房间）────────
function buildLayout(mods, area, iW, iH, PAD) {
  const rooms = [];
  const x0 = PAD, y0 = PAD;
  const W = iW, H = iH;

  // ── 核心参数 ──
  const hasCore = area >= 500;           // 500㎡以上才有中央核心筒
  const coreW   = Math.min(W*0.28, 200);
  const coreH   = Math.min(H*0.38, 180);
  const coreX   = x0 + W/2 - coreW/2;
  const coreY   = y0 + H/2 - coreH/2;

  // 中央走廊宽度
  const corrW = Math.max(28, Math.min(40, W*0.05));
  const corrH = Math.max(28, Math.min(40, H*0.07));

  // ── 按面积选择布局模板 ──
  if (area < 200) {
    // 小面积：简单两区布局
    layoutSmall(rooms, mods, x0, y0, W, H);
  } else if (area < 600) {
    // 中面积：L形布局
    layoutMedium(rooms, mods, x0, y0, W, H);
  } else {
    // 大面积：中央核心筒布局（参考图）
    layoutLarge(rooms, mods, x0, y0, W, H, coreX, coreY, coreW, coreH, corrW, corrH, hasCore);
  }

  return rooms;
}

// ── 小面积布局（100-200㎡）──────────────────────────────────
function layoutSmall(rooms, mods, x0, y0, W, H) {
  const m = k => modByKey(mods, k);
  // 前台：顶部全宽
  const recH = Math.round(H * 0.14);
  rooms.push({key:'reception', x:x0, y:y0, w:W, h:recH, ...m('reception')});

  // 中央走廊
  const corrH = Math.round(H * 0.08);
  const corrY = y0 + recH;
  rooms.push({key:'corridor', x:x0, y:corrY, w:W, h:corrH, ...m('corridor')});

  // 工位区：左侧大块
  const wsW = Math.round(W * 0.62);
  const wsY = corrY + corrH;
  const wsH = Math.round(H * 0.52);
  rooms.push({key:'workstation', x:x0, y:wsY, w:wsW, h:wsH, ...m('workstation')});

  // 右侧：会议室 + 经理室
  const rX = x0 + wsW;
  const rW = W - wsW;
  const meetH = Math.round(wsH * 0.55);
  rooms.push({key:'meeting', x:rX, y:wsY, w:rW, h:meetH, ...m('meeting')});
  rooms.push({key:'manager', x:rX, y:wsY+meetH, w:rW, h:wsH-meetH, ...m('manager')});

  // 底部：休闲 + 卫生间 + 储藏
  const botY = wsY + wsH;
  const botH = y0 + H - botY;
  const loungeW = Math.round(W * 0.45);
  const toiletW = Math.round(W * 0.30);
  const storW = W - loungeW - toiletW;
  rooms.push({key:'lounge',   x:x0,              y:botY, w:loungeW, h:botH, ...m('lounge')});
  rooms.push({key:'toilet',   x:x0+loungeW,      y:botY, w:toiletW, h:botH, ...m('toilet')});
  rooms.push({key:'storage',  x:x0+loungeW+toiletW, y:botY, w:storW, h:botH, ...m('storage')});
}

// ── 中面积布局（200-600㎡）──────────────────────────────────
function layoutMedium(rooms, mods, x0, y0, W, H) {
  const m = k => modByKey(mods, k);

  // 顶部：前台 + 开放协作区
  const topH = Math.round(H * 0.16);
  const recW = Math.round(W * 0.28);
  rooms.push({key:'reception', x:x0, y:y0, w:recW, h:topH, ...m('reception')});
  rooms.push({key:'openSpace', x:x0+recW, y:y0, w:W-recW, h:topH, ...m('openSpace')});

  // 水平走廊
  const corrH = Math.round(H * 0.07);
  const corrY = y0 + topH;
  rooms.push({key:'corridor', x:x0, y:corrY, w:W, h:corrH, ...m('corridor')});

  // 中部：工位区（左大）+ 右侧房间列
  const midY = corrY + corrH;
  const midH = Math.round(H * 0.48);
  const wsW  = Math.round(W * 0.60);
  rooms.push({key:'workstation', x:x0, y:midY, w:wsW, h:midH, ...m('workstation')});

  // 右侧房间（从上到下）
  const rX = x0 + wsW;
  const rW = W - wsW;
  const meetH  = Math.round(midH * 0.40);
  const manH   = Math.round(midH * 0.32);
  const wbarH  = midH - meetH - manH;
  rooms.push({key:'meeting',  x:rX, y:midY,           w:rW, h:meetH, ...m('meeting')});
  rooms.push({key:'manager',  x:rX, y:midY+meetH,     w:rW, h:manH,  ...m('manager')});
  rooms.push({key:'waterbar', x:rX, y:midY+meetH+manH,w:rW, h:wbarH, ...m('waterbar')});

  // 底部：休闲 + 电话亭 + 卫生间 + 储藏
  const botY = midY + midH;
  const botH = y0 + H - botY;
  const keys4 = ['lounge','phoneBooth','toilet','storage'].filter(k=>mods.find(mm=>mm.key===k));
  const segW = Math.round(W / keys4.length);
  keys4.forEach((k,i) => {
    const isLast = i === keys4.length-1;
    rooms.push({key:k, x:x0+i*segW, y:botY, w:isLast?W-i*segW:segW, h:botH, ...m(k)});
  });
}

// ── 大面积布局（600㎡+，参考图中央核心筒）──────────────────────
function layoutLarge(rooms, mods, x0, y0, W, H, coreX, coreY, coreW, coreH, corrW, corrH, hasCore) {
  const m = k => modByKey(mods, k);

  // 中央核心筒（电梯厅）
  if(hasCore) {
    rooms.push({key:'corridor', x:coreX, y:coreY, w:coreW, h:coreH,
      name:'电梯厅/核心筒', color:'#d8d8d8', stroke:'#555', size:0, pct:0, icon:'🔲', isCore:true});
  }

  // 水平主走廊（贯穿中部）
  const hCorrY = coreY + coreH/2 - corrH/2;
  rooms.push({key:'corridor', x:x0, y:hCorrY, w:W, h:corrH,
    name:'主走廊', color:'#f0f0ec', stroke:'#bbb', size:Math.round(mods.find(mm=>mm.key==='corridor')?.size*0.5||0), pct:0, icon:'➡️'});

  // 竖向走廊（左右贯穿）
  const vCorrX = coreX - corrW;
  rooms.push({key:'corridor', x:vCorrX, y:y0, w:corrW, h:H,
    name:'', color:'#f0f0ec', stroke:'#bbb', size:0, pct:0, icon:''});
  const vCorrX2 = coreX + coreW;
  rooms.push({key:'corridor', x:vCorrX2, y:y0, w:corrW, h:H,
    name:'', color:'#f0f0ec', stroke:'#bbb', size:0, pct:0, icon:''});

  // ── 上方区域（核心筒上方）──
  const topH = coreY - y0;
  // 上方左侧工位
  const topWsW = Math.round(vCorrX * 0.55);
  rooms.push({key:'workstation', x:x0, y:y0, w:topWsW, h:topH, ...m('workstation')});
  // 上方中间：会议室群
  const topMidX = x0 + topWsW;
  const topMidW = vCorrX - topWsW;
  const meetCount = Math.max(1, Math.round(topMidW / 80));
  const meetW = Math.round(topMidW / meetCount);
  for(let i=0;i<meetCount;i++){
    rooms.push({key:'meeting', x:topMidX+i*meetW, y:y0, w:meetW, h:topH, ...m('meeting')});
  }
  // 上方右侧工位
  const topRX = vCorrX2 + corrW;
  const topRW = x0+W - topRX;
  rooms.push({key:'workstation', x:topRX, y:y0, w:topRW, h:topH, ...m('workstation')});

  // ── 下方区域（核心筒下方）──
  const botY = coreY + coreH;
  const botH = y0 + H - botY;
  // 下方左侧工位
  rooms.push({key:'workstation', x:x0, y:botY, w:topWsW, h:botH, ...m('workstation')});
  // 下方中间：休闲+水吧+卫生间
  const botMidX = x0 + topWsW;
  const botMidW = vCorrX - topWsW;
  const botKeys = ['lounge','waterbar','toilet','storage'].filter(k=>mods.find(mm=>mm.key===k));
  const bSegW = Math.round(botMidW / botKeys.length);
  botKeys.forEach((k,i)=>{
    const isLast = i===botKeys.length-1;
    rooms.push({key:k, x:botMidX+i*bSegW, y:botY, w:isLast?botMidW-i*bSegW:bSegW, h:botH, ...m(k)});
  });
  // 下方右侧：经理室群
  const botRX = vCorrX2 + corrW;
  const botRW = x0+W - botRX;
  const manCount = Math.max(1, Math.round(botRW / 90));
  const manW = Math.round(botRW / manCount);
  for(let i=0;i<manCount;i++){
    rooms.push({key:'manager', x:botRX+i*manW, y:botY, w:manW, h:botH, ...m('manager')});
  }

  // ── 左侧区域（核心筒左侧）──
  const leftW = vCorrX - x0;
  const midY1 = hCorrY;
  const midY2 = hCorrY + corrH;
  // 左上：开放协作区
  rooms.push({key:'openSpace', x:x0, y:coreY, w:leftW, h:hCorrY-coreY, ...m('openSpace')});
  // 左下：电话亭/储藏
  const leftBotH = coreY+coreH - midY2;
  if(leftBotH > 20) {
    rooms.push({key:'phoneBooth', x:x0, y:midY2, w:Math.round(leftW*0.5), h:leftBotH, ...m('phoneBooth')});
    rooms.push({key:'server',     x:x0+Math.round(leftW*0.5), y:midY2, w:leftW-Math.round(leftW*0.5), h:leftBotH, ...m('server')});
  }

  // ── 右侧区域（核心筒右侧）──
  const rightX = vCorrX2 + corrW;
  const rightW = x0+W - rightX;
  // 右上：会议室
  rooms.push({key:'meeting', x:rightX, y:coreY, w:rightW, h:hCorrY-coreY, ...m('meeting')});
  // 右下：休闲区
  const rightBotH = coreY+coreH - midY2;
  if(rightBotH > 20) {
    rooms.push({key:'lounge', x:rightX, y:midY2, w:rightW, h:rightBotH, ...m('lounge')});
  }
}

function modByKey(mods, key) {
  return mods.find(m=>m.key===key) || {name:'',color:'#eee',stroke:'#aaa',size:0,pct:0,icon:''};
}

// ── 房间绘制（分层）────────────────────────────────────────────
function drawRoomFill(r) {
  if(!r.w||!r.h||r.w<2||r.h<2) return '';
  return `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color||'#eee'}" stroke="none"/>`;
}

function drawRoomWalls(r) {
  if(!r.w||!r.h||r.w<2||r.h<2) return '';
  let s = `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="none" stroke="${r.stroke||'#888'}" stroke-width="2"/>`;
  // 门弧（非走廊、非核心筒、足够大的房间）
  if(!['corridor'].includes(r.key) && !r.isCore && r.w>30 && r.h>30) {
    s += drawDoor(r.x, r.y, r.w, r.h, r.key);
  }
  // 窗线（外墙侧）
  if(['workstation','meeting','manager','lounge','openSpace'].includes(r.key)) {
    s += drawWindow(r.x, r.y, r.w, r.h);
  }
  return s;
}

function drawRoomLabel(r) {
  if(!r.w||!r.h||r.w<20||r.h<16) return '';
  if(!r.name) return '';
  const cx = r.x + r.w/2, cy = r.y + r.h/2;
  const fs = Math.max(8, Math.min(12, r.w/9, r.h/4));
  let s = `<text x="${cx}" y="${cy-(r.size>0?7:2)}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="#1a1a1a" pointer-events="none">${r.name}</text>`;
  if(r.size>0) s += `<text x="${cx}" y="${cy+8}" text-anchor="middle" font-size="${Math.max(7,fs-2)}" fill="#555" pointer-events="none">${r.size}㎡ · ${(r.pct*100).toFixed(0)}%</text>`;
  return s;
}

function drawRoomHit(r) {
  if(!r.w||!r.h||!r.key||r.isCore) return '';
  return `<rect class="room-hit" x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="transparent" stroke="none" data-key="${r.key}" style="cursor:pointer"/>`;
}

// 门弧
function drawDoor(x, y, w, h, key) {
  const dw = Math.min(20, w*0.22, h*0.22);
  const dx = x + 6, dy = y + h;
  return `<line x1="${dx}" y1="${dy}" x2="${dx+dw}" y2="${dy}" stroke="#1a1a1a" stroke-width="1.5"/>
          <path d="M${dx} ${dy} A${dw} ${dw} 0 0 1 ${dx+dw} ${dy-dw}" fill="none" stroke="#555" stroke-width="1" stroke-dasharray="3,2"/>`;
}

// 窗线（三线窗，参考图风格）
function drawWindow(x, y, w, h) {
  const wx = x + w*0.15, ww = w*0.7;
  return `<line x1="${wx}" y1="${y}" x2="${wx+ww}" y2="${y}" stroke="#1a1a1a" stroke-width="3"/>
          <line x1="${wx}" y1="${y+2}" x2="${wx+ww}" y2="${y+2}" stroke="#aaccee" stroke-width="2"/>
          <line x1="${wx}" y1="${y-2}" x2="${wx+ww}" y2="${y-2}" stroke="#aaccee" stroke-width="2"/>`;
}

// 家具符号
function drawFurniture(x, y, w, h, key) {
  let s = '';
  const cx = x+w/2, cy = y+h/2;
  const sc = Math.min(w,h)/80;
  const fs = Math.max(14, Math.min(28, Math.min(w,h)*0.3));

  if(key==='workstation') s += drawDesks(x,y,w,h);
  else if(key==='meeting') s += drawMeetingTable(x,y,w,h);
  else if(key==='manager') s += drawManagerDesk(x,y,w,h);
  else if(key==='lounge') s += drawSofa(x,y,w,h);
  else if(key==='toilet') s += drawToilet(x,y,w,h);
  else if(key==='reception') s += drawReceptionDesk(x,y,w,h);
  else if(key==='waterbar') s += drawWaterbar(x,y,w,h);
  else if(key==='server') s += drawServerRack(x,y,w,h);
  else if(key==='phoneBooth') s += drawBooth(x,y,w,h);
  else if(key==='openSpace') s += drawOpenSpace(x,y,w,h);

  return s;
}

// ── 家具绘制函数 ──────────────────────────────────────────────
function drawDesks(x,y,w,h) {
  let s='';
  const deskW=22, deskH=14, gap=6, chairR=5;
  const cols=Math.max(1,Math.floor((w-20)/(deskW+gap)));
  const rows=Math.max(1,Math.floor((h-30)/(deskH+chairR*2+gap)));
  const startX=x+10, startY=y+20;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const dx=startX+c*(deskW+gap);
      const dy=startY+r*(deskH+chairR*2+gap);
      if(dx+deskW>x+w-8||dy+deskH+chairR*2>y+h-8) continue;
      // 桌子
      s+=`<rect x="${dx}" y="${dy}" width="${deskW}" height="${deskH}" fill="white" stroke="#888" stroke-width="1" rx="1"/>`;
      // 椅子（桌子下方）
      s+=`<circle cx="${dx+deskW/2}" cy="${dy+deskH+chairR+1}" r="${chairR}" fill="white" stroke="#888" stroke-width="1"/>`;
      // 显示器小点
      s+=`<rect x="${dx+deskW/2-3}" y="${dy+2}" width="6" height="4" fill="#ccc" rx="1"/>`;
    }
  }
  return s;
}

function drawMeetingTable(x,y,w,h) {
  let s='';
  const tw=Math.min(w*0.55,80), th=Math.min(h*0.45,40);
  const tx=x+w/2-tw/2, ty=y+h/2-th/2;
  // 会议桌（圆角矩形）
  s+=`<rect x="${tx}" y="${ty}" width="${tw}" height="${th}" fill="white" stroke="#888" stroke-width="1.5" rx="8"/>`;
  // 椅子围绕
  const chairR=5;
  const topCount=Math.max(2,Math.floor(tw/18));
  for(let i=0;i<topCount;i++){
    const cx=tx+tw/(topCount+1)*(i+1);
    s+=`<circle cx="${cx}" cy="${ty-chairR-2}" r="${chairR}" fill="white" stroke="#888" stroke-width="1"/>`;
    s+=`<circle cx="${cx}" cy="${ty+th+chairR+2}" r="${chairR}" fill="white" stroke="#888" stroke-width="1"/>`;
  }
  const sideCount=Math.max(1,Math.floor(th/16));
  for(let i=0;i<sideCount;i++){
    const cy=ty+th/(sideCount+1)*(i+1);
    s+=`<circle cx="${tx-chairR-2}" cy="${cy}" r="${chairR}" fill="white" stroke="#888" stroke-width="1"/>`;
    s+=`<circle cx="${tx+tw+chairR+2}" cy="${cy}" r="${chairR}" fill="white" stroke="#888" stroke-width="1"/>`;
  }
  return s;
}

function drawManagerDesk(x,y,w,h) {
  let s='';
  const dw=Math.min(w*0.6,60), dh=Math.min(h*0.35,28);
  const dx=x+w/2-dw/2, dy=y+h*0.35;
  s+=`<rect x="${dx}" y="${dy}" width="${dw}" height="${dh}" fill="white" stroke="#888" stroke-width="1.5" rx="2"/>`;
  s+=`<circle cx="${dx+dw/2}" cy="${dy+dh+8}" r="7" fill="white" stroke="#888" stroke-width="1"/>`;
  // 沙发（会客区）
  const sx=x+8, sy=y+h*0.65, sw=Math.min(w-16,50), sh=12;
  s+=`<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="#e8e0d0" stroke="#888" stroke-width="1" rx="3"/>`;
  s+=`<rect x="${sx}" y="${sy-8}" width="${sw}" height="8" fill="#e8e0d0" stroke="#888" stroke-width="1" rx="2"/>`;
  return s;
}

function drawSofa(x,y,w,h) {
  let s='';
  const sw=Math.min(w-20,70), sh=14;
  const sx=x+w/2-sw/2, sy=y+h*0.45;
  s+=`<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="#d4e8d4" stroke="#5a8a5a" stroke-width="1" rx="4"/>`;
  s+=`<rect x="${sx}" y="${sy-10}" width="${sw}" height="10" fill="#d4e8d4" stroke="#5a8a5a" stroke-width="1" rx="3"/>`;
  // 茶几
  const tw=Math.min(sw*0.5,30), th=10;
  s+=`<rect x="${sx+sw/2-tw/2}" y="${sy+sh+4}" width="${tw}" height="${th}" fill="white" stroke="#888" stroke-width="1" rx="2"/>`;
  return s;
}

function drawToilet(x,y,w,h) {
  let s='';
  const cols=Math.max(1,Math.floor(w/22));
  for(let i=0;i<cols;i++){
    const tx=x+6+i*22, ty=y+8;
    if(tx+16>x+w-4) break;
    // 马桶
    s+=`<ellipse cx="${tx+8}" cy="${ty+14}" rx="7" ry="9" fill="white" stroke="#888" stroke-width="1"/>`;
    s+=`<rect x="${tx+2}" y="${ty}" width="12" height="8" fill="white" stroke="#888" stroke-width="1" rx="2"/>`;
  }
  // 洗手台
  const bx=x+6, by=y+h-20;
  s+=`<rect x="${bx}" y="${by}" width="18" height="12" fill="white" stroke="#888" stroke-width="1" rx="3"/>`;
  s+=`<circle cx="${bx+9}" cy="${by+6}" r="2" fill="#aaa"/>`;
  return s;
}

function drawReceptionDesk(x,y,w,h) {
  let s='';
  const dw=Math.min(w-16,w*0.7), dh=Math.min(h*0.4,18);
  const dx=x+w/2-dw/2, dy=y+h*0.5;
  // L形前台
  s+=`<rect x="${dx}" y="${dy}" width="${dw}" height="${dh}" fill="white" stroke="#7050a0" stroke-width="1.5" rx="2"/>`;
  s+=`<rect x="${dx}" y="${dy}" width="${dh}" height="${dh*1.5}" fill="white" stroke="#7050a0" stroke-width="1.5" rx="2"/>`;
  return s;
}

function drawWaterbar(x,y,w,h) {
  let s='';
  const bw=Math.min(w-12,50), bh=12;
  const bx=x+w/2-bw/2, by=y+h*0.4;
  s+=`<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="white" stroke="#c07820" stroke-width="1.5" rx="2"/>`;
  // 设备图标
  const items=Math.min(4,Math.floor(bw/14));
  for(let i=0;i<items;i++){
    s+=`<rect x="${bx+4+i*13}" y="${by+2}" width="9" height="8" fill="#f0d8b0" stroke="#c07820" stroke-width="0.8" rx="1"/>`;
  }
  return s;
}

function drawServerRack(x,y,w,h) {
  let s='';
  const rw=Math.min(w-16,30), rh=Math.min(h-20,50);
  const rx=x+w/2-rw/2, ry=y+h/2-rh/2;
  s+=`<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="#c8d8e4" stroke="#305870" stroke-width="1.5" rx="2"/>`;
  const slots=Math.floor(rh/8);
  for(let i=0;i<slots;i++){
    s+=`<rect x="${rx+3}" y="${ry+3+i*8}" width="${rw-6}" height="5" fill="#a0b8c8" stroke="#305870" stroke-width="0.5" rx="1"/>`;
    s+=`<circle cx="${rx+rw-6}" cy="${ry+5+i*8}" r="1.5" fill="#00cc44"/>`;
  }
  return s;
}

function drawBooth(x,y,w,h) {
  let s='';
  const bw=Math.min(w-8,w*0.7), bh=Math.min(h-8,h*0.7);
  const bx=x+w/2-bw/2, by=y+h/2-bh/2;
  s+=`<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="#f0d8d8" stroke="#a04040" stroke-width="1.5" rx="4"/>`;
  s+=`<circle cx="${x+w/2}" cy="${y+h/2}" r="${Math.min(bw,bh)*0.2}" fill="white" stroke="#a04040" stroke-width="1"/>`;
  return s;
}

function drawOpenSpace(x,y,w,h) {
  let s='';
  // 几组高脚桌
  const count=Math.max(1,Math.floor(w/30));
  for(let i=0;i<count;i++){
    const cx=x+15+i*(w-20)/count, cy=y+h/2;
    s+=`<circle cx="${cx}" cy="${cy}" r="8" fill="white" stroke="#308030" stroke-width="1.2"/>`;
    s+=`<circle cx="${cx-12}" cy="${cy+4}" r="5" fill="white" stroke="#308030" stroke-width="1"/>`;
    s+=`<circle cx="${cx+12}" cy="${cy+4}" r="5" fill="white" stroke="#308030" stroke-width="1"/>`;
  }
  // 白板
  s+=`<rect x="${x+w-20}" y="${y+8}" width="12" height="${Math.min(h-16,40)}" fill="white" stroke="#308030" stroke-width="1.5" rx="1"/>`;
  return s;
}

// ── 标注辅助 ──────────────────────────────────────────────────
function dimLine(x1,y1,x2,y2,label,vertical=false) {
  let s=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#888" stroke-width="1" stroke-dasharray="4,2"/>`;
  const mx=(x1+x2)/2, my=(y1+y2)/2;
  if(vertical) {
    s+=`<text x="${mx-4}" y="${my}" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,${mx-4},${my})">${label}</text>`;
  } else {
    s+=`<text x="${mx}" y="${y1+10}" text-anchor="middle" font-size="9" fill="#888">${label}</text>`;
  }
  return s;
}

function compass(cx,cy) {
  return `<circle cx="${cx}" cy="${cy}" r="18" fill="white" stroke="#ccc" stroke-width="1"/>
          <polygon points="${cx},${cy-14} ${cx-5},${cy+4} ${cx},${cy+2} ${cx+5},${cy+4}" fill="#1a1a1a"/>
          <polygon points="${cx},${cy+14} ${cx-5},${cy-4} ${cx},${cy-2} ${cx+5},${cy-4}" fill="#ccc"/>
          <text x="${cx}" y="${cy-16}" text-anchor="middle" font-size="8" font-weight="700" fill="#1a1a1a">N</text>`;
}

function scaleBar(x,y,area) {
  const barW=60;
  const m=Math.round(Math.sqrt(area*1.3)/5)*5;
  return `<line x1="${x}" y1="${y}" x2="${x+barW}" y2="${y}" stroke="#888" stroke-width="2"/>
          <line x1="${x}" y1="${y-4}" x2="${x}" y2="${y+4}" stroke="#888" stroke-width="1.5"/>
          <line x1="${x+barW}" y1="${y-4}" x2="${x+barW}" y2="${y+4}" stroke="#888" stroke-width="1.5"/>
          <text x="${x+barW/2}" y="${y+12}" text-anchor="middle" font-size="8" fill="#888">0 — ${m}m</text>`;
}

// ── 模块列表 ──────────────────────────────────────────────────
function renderModulesList(mods) {
  const total = mods.reduce((s,m)=>s+m.size,0);
  const cap = {min:Math.floor(total/8), max:Math.floor(total/5)};
  const list = document.getElementById('modulesList');
  list.innerHTML = `
    <div class="capacity-info">
      <div class="capacity-number">${cap.min}–${cap.max}</div>
      <div class="capacity-label">可容纳人数</div>
    </div>
    <div class="modules-divider"></div>
  ` + mods.map(m => {
    const pct = ((m.size/total)*100).toFixed(1);
    return `<div class="module-item" data-module="${m.key}">
      <div class="module-color" style="background:${m.color};border:1.5px solid ${m.stroke}"></div>
      <div class="module-info">
        <span class="module-name">${m.icon} ${m.name}</span>
        <span class="module-percent">${pct}%</span>
      </div>
      <span class="module-size">${m.size}㎡</span>
    </div>`;
  }).join('');
  list.querySelectorAll('.module-item').forEach(el => {
    el.addEventListener('click', () => openModuleModal(el.dataset.module));
  });
}

// ── 弹窗 ──────────────────────────────────────────────────────
function openModuleModal(key) {
  const d = DETAILS[key]; if(!d) return;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalBody').innerHTML = `
    <p>${d.desc}</p>
    <h4>主要设施</h4><ul>${d.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <h4>容纳人数</h4><p>${d.capacity}</p>
    <h4>设计要点</h4><p>${d.design}</p>`;
  document.getElementById('moduleModal').classList.add('open');
}
function closeModal() { document.getElementById('moduleModal').classList.remove('open'); }

// ── 设计风格 ──────────────────────────────────────────────────
function initStylesGrid() {
  const grid = document.getElementById('stylesGrid');
  grid.innerHTML = STYLES.map(st => `
    <div class="style-card" data-style="${st.id}">
      <div class="style-card-img"><img src="${st.cover}" alt="${st.name}"></div>
      <h3>${st.name}</h3><p>${st.desc}</p>
    </div>`).join('');
  grid.querySelectorAll('.style-card').forEach(c => {
    c.addEventListener('click', () => openStyleDetail(c.dataset.style));
  });
}

function openStyleDetail(id) {
  const st = STYLES.find(s=>s.id===id); if(!st) return;
  document.getElementById('detailTitle').textContent = st.name;
  document.getElementById('detailDesc').textContent = st.desc;

  // 风格标签
  const tagsHtml = (st.tags||[]).map(t=>`<span class="style-tag">${t}</span>`).join('');
  const tagsEl = document.getElementById('detailTags');
  if(tagsEl) tagsEl.innerHTML = tagsHtml;

  // 瀑布流：分3列
  const cols = [[],[],[]];
  st.gallery.forEach((item,i) => cols[i%3].push(item));

  document.getElementById('galleryGrid').innerHTML = cols.map(col=>`
    <div class="masonry-col">
      ${col.map(item=>`
        <div class="masonry-item" onclick="openImageModal('${item.url}','${item.cap}')">
          <img src="${item.url}" alt="${item.cap}" loading="lazy">
          <div class="masonry-cap">${item.cap}</div>
        </div>`).join('')}
    </div>`).join('');

  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('styleDetail').classList.add('active');
  document.getElementById('heroSection').classList.add('hidden');
  document.querySelectorAll('.nav-link,.mobile-link').forEach(l=>l.classList.remove('active'));
  window.scrollTo({top:0,behavior:'smooth'});
}

// 图片放大弹窗
function openImageModal(url, caption) {
  const modal = document.getElementById('imageModal');
  if(!modal) {
    // 创建图片弹窗
    const modalHtml = `
      <div id="imageModal" class="image-modal" onclick="closeImageModal()">
        <div class="image-modal-content" onclick="event.stopPropagation()">
          <button class="image-modal-close" onclick="closeImageModal()">×</button>
          <img id="modalImage" src="" alt="">
          <div id="modalCaption" class="image-modal-caption"></div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  document.getElementById('modalImage').src = url;
  document.getElementById('modalCaption').textContent = caption;
  document.getElementById('imageModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function goBackToStyles() {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('styles').classList.add('active');
  document.getElementById('heroSection').classList.remove('hidden');
  document.querySelector('.nav-link[data-tab="styles"]').classList.add('active');
}

// ── 导航 ──────────────────────────────────────────────────────
function initNavigation() {
  document.querySelectorAll('.nav-link,.mobile-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const tab = link.dataset.tab;
      document.querySelectorAll('.nav-link,.mobile-link').forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
      document.getElementById(tab).classList.add('active');
      document.getElementById('heroSection').classList.toggle('hidden', tab!=='layouts');
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('main').scrollIntoView({behavior:'smooth'});
    });
  });
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function goHome() {
  document.querySelectorAll('.nav-link,.mobile-link').forEach(l=>l.classList.remove('active'));
  document.querySelector('.nav-link[data-tab="layouts"]').classList.add('active');
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('layouts').classList.add('active');
  document.getElementById('heroSection').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

function scrollToMain() {
  document.getElementById('main').scrollIntoView({behavior:'smooth'});
}

window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.boxShadow = window.scrollY>10 ? '0 2px 12px rgba(0,0,0,0.08)' : 'none';
});


// ── 预约咨询 ──────────────────────────────────────────────────
function openBookingModal() {
  document.getElementById('bookingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow = '';
  // 重置表单
  setTimeout(() => {
    document.getElementById('bookingForm').reset();
    document.getElementById('bookingForm').style.display = 'flex';
    document.getElementById('bookingSuccess').style.display = 'none';
  }, 300);
}

function submitBooking(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // 模拟提交（实际项目中应该发送到后端API）
  console.log('预约信息：', data);

  // 显示成功提示
  form.style.display = 'none';
  document.getElementById('bookingSuccess').style.display = 'block';

  // 实际项目中的API调用示例：
  /*
  fetch('/api/booking', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    form.style.display = 'none';
    document.getElementById('bookingSuccess').style.display = 'block';
  })
  .catch(err => {
    alert('提交失败，请稍后重试');
  });
  */
}
