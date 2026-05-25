import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Activity, PlaySquare, Clock, BarChart3, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const websiteTrafficData = [
  { name: '05-18', pv: 55 },
  { name: '05-19', pv: 80 },
  { name: '05-20', pv: 63 },
  { name: '05-21', pv: 55 },
  { name: '05-22', pv: 49 },
  { name: '05-23', pv: 56 },
  { name: '05-24', pv: 53 },
];

const wechatSourceData = [
  { name: '朋友圈', value: 33.4 },
  { name: '服务号消息', value: 22.1 },
  { name: '搜一搜', value: 27.8 },
  { name: '服务号主页', value: 15.2 },
  { name: '聊天会话', value: 2.8 },
  { name: '其它', value: 2.6 },
];

export default function App() {
  // State for editable fields
  const [reportTitle, setReportTitle] = useState('工作周报');
  const [reporterName, setReporterName] = useState('Amos');
  const [reportDate, setReportDate] = useState('2026-05-18到2026-05-22');
  
  const [section1Title, setSection1Title] = useState('一、核心数据与流量趋势');
  const [section2Title, setSection2Title] = useState('二、新媒体矩阵');
  const [section3Title, setSection3Title] = useState('三、高价值客询');
  const [section4Title, setSection4Title] = useState('四、SEO排名情况');
  const [section5Title, setSection5Title] = useState('五、其它');
  const [section6Title, setSection6Title] = useState('六、周报总结');

  // Media Matrix State
  const [elaineVideos, setElaineVideos] = useState([
    { id: 1, title: '选型避坑：保险丝越大越危险', date: '2026/5/23', views: '874', hearts: '42', likes: '31', comments: '7', forwards: '6', follows: '2', completion: '7.33%', interaction: '--' },
    { id: 2, title: '服务器电源降不下来', date: '2026/5/22', views: '996', hearts: '49', likes: '35', comments: '9', forwards: '15', follows: '2', completion: '5.43%', interaction: '--' },
    { id: 3, title: '流量之后拼质量', date: '2026/5/20', views: '1939', hearts: '57', likes: '49', comments: '12', forwards: '23', follows: '3', completion: '4.85%', interaction: '--' },
  ]);
  const [elaineDouyin, setElaineDouyin] = useState([
    { id: 1, title: '精神股东参观仓库', views: '36', completion: '34%', follows: '--', likes: '4', favs: '1', coverClick: '--' },
    { id: 2, title: '涨价不可怕，没预案才可怕', views: '1837', completion: '2.17%', follows: '7', likes: '16', favs: '11', coverClick: '--' },
  ]);
  const [elaineSummary, setElaineSummary] = useState('新视频“流量之后拼质量”播放量较好，“涨价不可怕，没预案才可怕”在抖音也获超1800播放。');

  const [jessicaVideos, setJessicaVideos] = useState([
    { id: 1, title: '电路保护器材是不是越大越好', date: '2026/5/18', views: '1530', hearts: '43', likes: '36', comments: '10', forwards: '3', follows: '4', completion: '10.27%', interaction: '6.31%' },
    { id: 2, title: '你以为ESD静电没有杀伤力', date: '2026/5/20', views: '2698', hearts: '35', likes: '40', comments: '5', forwards: '9', follows: '4', completion: '18.72%', interaction: '3.41%' },
    { id: 3, title: '有了TVS为什么还要保险丝', date: '2026/5/22', views: '965', hearts: '26', likes: '24', comments: '6', forwards: '7', follows: '8', completion: '12.33%', interaction: '7.55%' },
  ]);
  const [jessicaDouyin, setJessicaDouyin] = useState([
    { id: 1, title: '电路保护器材是不是越大越好', views: '1610', completion: '4.71%', follows: '4', likes: '23', favs: '2', coverClick: '--' },
    { id: 2, title: '你以为ESD静电没有杀伤力', views: '2552', completion: '8.44%', follows: '13', likes: '28', favs: '5', coverClick: '--' },
    { id: 3, title: '有了TVS为什么还要保险丝', views: '8457', completion: '5.39%', follows: '55', likes: '146', favs: '44', coverClick: '--' },
  ]);
  const [jessicaSummary, setJessicaSummary] = useState('“有了TVS为什么还要保险丝”在抖音大爆，播放量达8457次，带来55个新增关注。');

  const [amosVideos, setAmosVideos] = useState([
    { id: 1, title: '压敏电阻', date: '2026/5/18', views: '3740', hearts: '35', likes: '68', comments: '7', forwards: '77', follows: '158', completion: '3.82%', interaction: '9.49%' },
    { id: 2, title: 'IGBT', date: '2026/5/19', views: '1775', hearts: '28', likes: '34', comments: '5', forwards: '4', follows: '46', completion: '5.41%', interaction: '7.9%' },
    { id: 3, title: '云逛查尔斯', date: '2026/5/22', views: '2207', hearts: '53', likes: '69', comments: '17', forwards: '16', follows: '60', completion: '6.8%', interaction: '9.97%' },
  ]);
  const [amosDouyin, setAmosDouyin] = useState([
    { id: 1, title: '压敏电阻', views: '1830', completion: '2.64%', follows: '5', likes: '15', favs: '8', coverClick: '--' },
    { id: 2, title: 'IGBT', views: '1475', completion: '3.33%', follows: '3', likes: '24', favs: '13', coverClick: '--' },
    { id: 3, title: '云逛查尔斯', views: '612', completion: '1.56%', follows: '5', likes: '6', favs: '2', coverClick: '--' },
  ]);
  const [amosSummary, setAmosSummary] = useState('视频号端“压敏电阻”起量，单条涨粉158人，抖音表现相对平稳。整体新媒体矩阵累计涨粉1454人。');

  const [otherSummary, setOtherSummary] = useState('');
  const [weeklySummary, setWeeklySummary] = useState('本周全网累计涨粉近1500人，主要由视频号及抖音贡献，其中Amos和Jessica在专业硬核科普上取得较好突破；官网流量维持正常水平，带来2名明确需求的终端客户，询单质量较高。公众号方面通过搜一搜带来精准关注，需持续进行长尾内容建设。');
  
  const [inquiries, setInquiries] = useState([
    { id: 1, name: '深圳市汇芯高新科技有限公司', partNo: 'CPC1117N(固态继电器)', usage: '50k', app: '智能I/O模块', date: '2026-05-21', status: '邮件询价中', mpDate: '已经量产' },
    { id: 2, name: '石家庄傲尔科技有限公司', partNo: '1812L300/24SLER(PPTC)', usage: '95000', app: '扫地机器人', date: '2026-05-18', status: '邮件询价中', mpDate: '未启动' },
  ]);

  const [seo, setSeo] = useState([
    { id: 1, keyword: '上海力特代理', rank: '第一页第一' },
    { id: 2, keyword: 'KSS华东代理', rank: '第一页第一' },
    { id: 3, keyword: '上海凯士士代理', rank: '第一页第二' },
    { id: 4, keyword: '上海力特代理', rank: '第一页第一' },
  ]);

  const addInquiry = () => setInquiries([...inquiries, { id: Date.now(), name: '', partNo: '', usage: '', app: '', date: '', status: '', mpDate: '' }]);
  const updateInquiry = (id: number, field: string, value: string) => setInquiries(inquiries.map(p => p.id === id ? { ...p, [field]: value } : p));
  const removeInquiry = (id: number) => setInquiries(inquiries.filter(p => p.id !== id));

  const addSeo = () => setSeo([...seo, { id: Date.now(), keyword: '', rank: '' }]);
  const updateSeo = (id: number, field: string, value: string) => setSeo(seo.map(p => p.id === id ? { ...p, [field]: value } : p));
  const removeSeo = (id: number) => setSeo(seo.filter(p => p.id !== id));

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6 print:space-y-4">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">运营汇报生成器</h1>
            <p className="text-sm text-slate-500">点击页面任何标题或文字均可进行编辑修改内容</p>
          </div>
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
                <span>时间:</span>
                <Input 
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                  className="w-56 border-none shadow-none focus-visible:ring-0 px-0 h-auto text-slate-700 font-medium print:p-0"
                />
              </div>
            </div>
          </div>

          {/* Section 1: Core Data & Charts */}
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
                    全网新增关注
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1454 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    视频号与抖音涨粉
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网浏览量
                    <MousePointerClick className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">411 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    新访客占比91.4%
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网询价人数
                    <Search className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    终端客户2人
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号关注
                    <Eye className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-amber-600 mt-1">
                    均来自搜一搜
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:break-inside-avoid">
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">官网流量趋势</CardTitle>
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
                  <CardTitle className="text-base">公众号流量占比</CardTitle>
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
            </div>
          </section>

          {/* Section 2: New Media Matrix */}
          <section className="space-y-6 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section2Title}
                onChange={(e) => setSection2Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            
            {/* Elaine */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800">Elaine <span className="text-sm font-normal text-slate-500 ml-2">视频号 & 抖音</span></h3>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>视频号平台</TableHead>
                      <TableHead>发布日期</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>红心 / 点赞 / 评论 / 转发</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>综合互动率</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {elaineVideos.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.hearts} / {item.likes} / {item.comments} / {item.forwards}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.interaction}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>抖音平台</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>点赞</TableHead>
                      <TableHead>收藏</TableHead>
                      <TableHead>封面点击</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {elaineDouyin.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.likes}</TableCell>
                        <TableCell>{item.favs}</TableCell>
                        <TableCell>{item.coverClick}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Textarea 
                value={elaineSummary}
                onChange={(e) => setElaineSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Elaine数据总结分析..."
              />
            </div>

            {/* Jessica */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-semibold text-slate-800">Jessica <span className="text-sm font-normal text-slate-500 ml-2">视频号 & 抖音</span></h3>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>视频号平台</TableHead>
                      <TableHead>发布日期</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>红心 / 点赞 / 评论 / 转发</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>综合互动率</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jessicaVideos.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.hearts} / {item.likes} / {item.comments} / {item.forwards}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.interaction}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>抖音平台</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>点赞</TableHead>
                      <TableHead>收藏</TableHead>
                      <TableHead>封面点击</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jessicaDouyin.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.likes}</TableCell>
                        <TableCell>{item.favs}</TableCell>
                        <TableCell>{item.coverClick}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Textarea 
                value={jessicaSummary}
                onChange={(e) => setJessicaSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Jessica数据总结分析..."
              />
            </div>

            {/* Amos */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-semibold text-slate-800">Amos <span className="text-sm font-normal text-slate-500 ml-2">视频号 & 抖音</span></h3>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>视频号平台</TableHead>
                      <TableHead>发布日期</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>红心 / 点赞 / 评论 / 转发</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>综合互动率</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amosVideos.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.hearts} / {item.likes} / {item.comments} / {item.forwards}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.interaction}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="border rounded-lg overflow-hidden print:border-slate-300 mb-2">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>抖音平台</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>点赞</TableHead>
                      <TableHead>收藏</TableHead>
                      <TableHead>封面点击</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amosDouyin.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.completion}</TableCell>
                        <TableCell>{item.follows}</TableCell>
                        <TableCell>{item.likes}</TableCell>
                        <TableCell>{item.favs}</TableCell>
                        <TableCell>{item.coverClick}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Textarea 
                value={amosSummary}
                onChange={(e) => setAmosSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Amos数据总结分析..."
              />
            </div>
            
          </section>

          {/* Section 3: High Value Inquiries Table */}
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
              <Button variant="outline" size="sm" onClick={addInquiry} className="print:hidden shrink-0 ml-4">
                <Plus className="w-4 h-4 mr-1" /> 添加客询
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[18%]">客户名称</TableHead>
                    <TableHead className="w-[15%]">力特料号</TableHead>
                    <TableHead className="w-[12%]">年用量</TableHead>
                    <TableHead className="w-[15%]">应用</TableHead>
                    <TableHead className="w-[15%]">询价日期</TableHead>
                    <TableHead className="w-[12%]">询价状态</TableHead>
                    <TableHead className="w-[8%]">量产</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={item.name} 
                          onChange={(e) => updateInquiry(item.id, 'name', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm font-medium"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.partNo} 
                          onChange={(e) => updateInquiry(item.id, 'partNo', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 font-mono text-sm text-blue-600"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.usage} 
                          onChange={(e) => updateInquiry(item.id, 'usage', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.app} 
                          onChange={(e) => updateInquiry(item.id, 'app', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.date} 
                          onChange={(e) => updateInquiry(item.id, 'date', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.status} 
                          onChange={(e) => updateInquiry(item.id, 'status', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm text-orange-600"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.mpDate} 
                          onChange={(e) => updateInquiry(item.id, 'mpDate', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-sm"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => removeInquiry(item.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {inquiries.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center text-slate-500 py-4 print:hidden">
                        暂无高价值客询信息，请点击添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section 4: SEO Ranking Table */}
          <section className="space-y-4 print:break-inside-avoid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 w-full">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
                <Input 
                  value={section4Title}
                  onChange={(e) => setSection4Title(e.target.value)}
                  className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
                />
              </h2>
              <Button variant="outline" size="sm" onClick={addSeo} className="print:hidden shrink-0 ml-4">
                <Plus className="w-4 h-4 mr-1" /> 添加排名
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[50%]">关键字</TableHead>
                    <TableHead className="w-[45%]">百度排名（除广告）</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {seo.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={item.keyword} 
                          onChange={(e) => updateSeo(item.id, 'keyword', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-slate-900 font-medium"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.rank} 
                          onChange={(e) => updateSeo(item.id, 'rank', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-emerald-600 font-medium"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => removeSeo(item.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {seo.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-slate-500 py-4 print:hidden">
                        暂无排名信息，请点击添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section 5: Other */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section5Title}
                onChange={(e) => setSection5Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            <Textarea 
              value={otherSummary}
              onChange={(e) => setOtherSummary(e.target.value)}
              className="min-h-[100px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入其它补充信息..."
            />
          </section>

          {/* Section 6: Weekly Summary */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section6Title}
                onChange={(e) => setSection6Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            <Textarea 
              value={weeklySummary}
              onChange={(e) => setWeeklySummary(e.target.value)}
              className="min-h-[160px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-blue-50/50 hover:bg-blue-50/80 focus:bg-blue-50/80 transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入周报总结..."
            />
          </section>

        </div>
      </div>
    </div>
  );
}
