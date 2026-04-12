import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Printer, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';

// Mock data for charts based on user images
const websiteTrafficData = [
  { name: '04-06', pv: 18 },
  { name: '04-07', pv: 68 },
  { name: '04-08', pv: 58 },
  { name: '04-09', pv: 48 },
  { name: '04-10', pv: 130 },
  { name: '04-11', pv: 35 },
  { name: '04-12', pv: 28 },
];

const wechatSourceData = [
  { name: '朋友圈', value: 50.4 },
  { name: '服务号消息', value: 28.4 },
  { name: '服务号主页', value: 16.0 },
  { name: '聊天会话', value: 10.0 },
  { name: '搜一搜', value: 5.0 },
];

const articleComparisonData = [
  {
    name: '省了5分钱...',
    fullName: '省了5分钱的扎带，赔了50万返修费！项目经理的"小件"血泪史',
    views: 198,
    likes: 23,
    shares: 11,
    favorites: 16
  },
  {
    name: '电力设备...',
    fullName: '电力设备和工业自动化里，哪些线束固定位置更适合重载型扎线带？',
    views: 9,
    likes: 5,
    shares: 1,
    favorites: 3
  },
  {
    name: '选型误区...',
    fullName: '扎线带选型误区：为何精明客户不把所有项目都押在单一型号上？',
    views: 6,
    likes: 5,
    shares: 1,
    favorites: 3
  }
];

const newFollowersData = [
  { name: '文章页关注', value: 6 },
  { name: '扫描二维码', value: 3 },
  { name: '搜一搜', value: 1 },
];
const COLORS = ['#5c6ac4', '#38bdf8', '#10b981'];

export default function App() {
  const today = new Date();
  const lastWeekStart = startOfWeek(subDays(today, 7), { weekStartsOn: 1 });
  const lastWeekEnd = endOfWeek(subDays(today, 7), { weekStartsOn: 1 });
  const defaultDateRange = `${format(lastWeekStart, 'yyyy.MM.dd')} - ${format(lastWeekEnd, 'yyyy.MM.dd')}`;

  // State for editable fields
  const [reportTitle, setReportTitle] = useState('运营周报');
  const [reporterName, setReporterName] = useState('运营团队');
  const [reportDate, setReportDate] = useState(defaultDateRange);
  const [section1Title, setSection1Title] = useState('一、上周核心数据概览');
  const [section2Title, setSection2Title] = useState('二、上周工作总结');
  const [section3Title, setSection3Title] = useState('三、其它项目进度');
  const [section4Title, setSection4Title] = useState('四、本周工作安排');
  const [section5Title, setSection5Title] = useState('五、本周公众号推文规划');
  const [lastWeekSummary, setLastWeekSummary] = useState('上周微信公众号阅读总人数680人，新增关注10人（60%来自文章页）。头条文章《省了5分钱的扎带...》表现优异，获198次阅读及23次点赞。官网方面，总浏览量(PV)380次，独立访客(UV)234人，新访客占比高达94.2%，但跳出率偏高(84%)。另外，上周官网留言2则，通过扫描官网留的企业微信直接联系的有3人，且都是贸易商。');
  const [thisWeekPlan, setThisWeekPlan] = useState('1. 内容运营：针对高互动文章《省了5分钱的扎带...》的话题，策划系列衍生图文或短视频。\n2. 官网优化：针对84%的高跳出率，本周重点优化首页（浏览量最高）的视觉引导和首屏加载速度。\n3. 转化提升：官网新访客占比94.2%，计划在首页和“联系我们”页面增加悬浮留资表单，提升线索转化率。\n4. 渠道拓展：朋友圈流量占比达50.4%，本周尝试策划一次朋友圈转发抽奖活动，进一步裂变。\n5. 客户跟进：重点跟进通过官网企微联系的3位贸易商客户，了解具体采购需求并建立长期合作关系。');
  
  const [projects, setProjects] = useState([
    { id: 1, name: '官网首页跳出率优化', status: '进行中', progress: '30%', notes: '正在重新设计首屏Banner和行动号召(CTA)按钮' },
    { id: 2, name: '公众号菜单栏更新', status: '已完成', progress: '100%', notes: '已增加“联系我们”和“产品手册”入口' },
    { id: 3, name: '客户案例图文排版', status: '规划中', progress: '0%', notes: '等待销售部提供素材' },
  ]);

  const [articles, setArticles] = useState([
    { id: 1, title: '为什么项目型客户，最后比的不是单价，而是补货能力？', target: '项目采购、工程经理', product: '全品类', viewpoint: '项目里最贵的不是单价，而是临时缺货和补货慢' },
    { id: 2, title: '上海超过2000平现货仓，对项目客户到底意味着什么？', target: '华东及周边项目客户', product: '全品类', viewpoint: '仓储价值不是仓库大，而是项目推进更稳' },
    { id: 3, title: '很多供应商只会报价，我们更愿意先帮客户判断工况', target: '工程师、采购', product: '全品类', viewpoint: '你们的差异化不是卖货，而是帮客户减少选错风险' }
  ]);

  const handleExportPDF = () => {
    window.print();
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), name: '', status: '', progress: '', notes: '' }]);
  };

  const updateProject = (id: number, field: string, value: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6 print:space-y-4">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">运营汇报生成器</h1>
            <p className="text-sm text-slate-500">编辑下方内容，完成后点击“打印/导出PDF” (建议在新标签页打开使用)</p>
          </div>
          <Button onClick={handleExportPDF} className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            打印 / 导出 PDF
          </Button>
        </div>

        {/* Report Content */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 space-y-10 print:shadow-none print:border-none print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-4 border-b pb-8 print:pb-4">
            <Input 
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              className="text-3xl md:text-4xl font-bold text-center border-none shadow-none focus-visible:ring-0 px-0 h-auto print:p-0"
            />
            <div className="flex justify-center items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <span>汇报人:</span>
                <Input 
                  value={reporterName}
                  onChange={(e) => setReporterName(e.target.value)}
                  className="w-32 border-none shadow-none focus-visible:ring-0 px-0 h-auto text-slate-700 font-medium print:p-0"
                />
              </div>
              <span>|</span>
              <div className="flex items-center gap-2">
                <span>周期:</span>
                <Input 
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                  className="w-48 border-none shadow-none focus-visible:ring-0 px-0 h-auto text-slate-700 font-medium print:p-0"
                />
              </div>
            </div>
          </div>

          {/* Section 1: Last Week Data */}
          <section className="space-y-6 print:space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section1Title}
                onChange={(e) => setSection1Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:grid-cols-4">
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号新增关注
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10</div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> 60%来自文章页
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号阅读人数
                    <Eye className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">680</div>
                  <p className="text-xs text-slate-500 mt-1">
                    爆款文章贡献 198 阅读
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网浏览量 (PV)
                    <MousePointerClick className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">380</div>
                  <p className="text-xs text-slate-500 mt-1">
                    平均停留 00:01:01
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网独立访客 (UV)
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-amber-600 flex items-center mt-1">
                    <Activity className="w-3 h-3 mr-1" /> 跳出率 84%
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:break-inside-avoid">
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">官网流量趋势 (近7天)</CardTitle>
                </CardHeader>
                <CardContent className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <Line type="monotone" dataKey="pv" name="浏览量(PV)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">公众号流量来源占比</CardTitle>
                </CardHeader>
                <CardContent className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wechatSourceData} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#475569' }} />
                      <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Bar dataKey="value" name="占比(%)" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="print:shadow-none print:border-slate-200 md:col-span-2 print:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">公众号文章数据对比</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={articleComparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        labelFormatter={(label, payload) => {
                          if (payload && payload.length > 0) {
                            return payload[0].payload.fullName;
                          }
                          return label;
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="views" name="阅读" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="likes" name="点赞" fill="#10b981" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="shares" name="分享" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="favorites" name="收藏" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="print:shadow-none print:border-slate-200 md:col-span-2 print:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">公众号新增关注渠道构成</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={newFollowersData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {newFollowersData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: number) => [`${value}人`, '新增关注']}
                      />
                      <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 font-bold text-lg">
                        新增关注
                      </text>
                      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 text-sm">
                        10人
                      </text>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Last Week Summary */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section2Title}
                onChange={(e) => setSection2Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            <Textarea 
              value={lastWeekSummary}
              onChange={(e) => setLastWeekSummary(e.target.value)}
              className="min-h-[120px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入上周工作总结..."
            />
          </section>

          {/* Section 3: Project Progress */}
          <section className="space-y-4 print:break-inside-avoid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 w-full">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
                <Input 
                  value={section3Title}
                  onChange={(e) => setSection3Title(e.target.value)}
                  className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
                />
              </h2>
              <Button variant="outline" size="sm" onClick={addProject} className="print:hidden shrink-0 ml-4">
                <Plus className="w-4 h-4 mr-1" /> 添加项目
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[25%]">项目名称</TableHead>
                    <TableHead className="w-[15%]">状态</TableHead>
                    <TableHead className="w-[15%]">进度</TableHead>
                    <TableHead className="w-[40%]">备注/下一步</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={project.name} 
                          onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="项目名称"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.status} 
                          onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="状态"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.progress} 
                          onChange={(e) => updateProject(project.id, 'progress', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="如: 80%"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.notes} 
                          onChange={(e) => updateProject(project.id, 'notes', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="备注说明"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => removeProject(project.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {projects.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-slate-500 py-4 print:hidden">
                        暂无项目，请点击右上角添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section 4: This Week Plan */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section4Title}
                onChange={(e) => setSection4Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            <Textarea 
              value={thisWeekPlan}
              onChange={(e) => setThisWeekPlan(e.target.value)}
              className="min-h-[150px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入本周工作安排..."
            />
          </section>

          {/* Section 5: Articles Plan */}
          <section className="space-y-4 print:break-inside-avoid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 w-full">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
                <Input 
                  value={section5Title}
                  onChange={(e) => setSection5Title(e.target.value)}
                  className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
                />
              </h2>
              <Button variant="outline" size="sm" onClick={() => setArticles([...articles, { id: Date.now(), title: '', target: '', product: '', viewpoint: '' }])} className="print:hidden shrink-0 ml-4">
                <Plus className="w-4 h-4 mr-1" /> 添加文章
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[30%]">标题</TableHead>
                    <TableHead className="w-[20%]">目标客户</TableHead>
                    <TableHead className="w-[15%]">主推产品</TableHead>
                    <TableHead className="w-[30%]">核心观点</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={article.title} 
                          onChange={(e) => setArticles(articles.map(a => a.id === article.id ? { ...a, title: e.target.value } : a))}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="文章标题"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={article.target} 
                          onChange={(e) => setArticles(articles.map(a => a.id === article.id ? { ...a, target: e.target.value } : a))}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="目标客户"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={article.product} 
                          onChange={(e) => setArticles(articles.map(a => a.id === article.id ? { ...a, product: e.target.value } : a))}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="主推产品"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={article.viewpoint} 
                          onChange={(e) => setArticles(articles.map(a => a.id === article.id ? { ...a, viewpoint: e.target.value } : a))}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="核心观点"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setArticles(articles.filter(a => a.id !== article.id))} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {articles.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-slate-500 py-4 print:hidden">
                        暂无文章规划，请点击右上角添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
