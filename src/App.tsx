import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Activity, PlaySquare, Clock, BarChart3, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const websiteTrafficData = [
  { name: '05-11', pv: 73 },
  { name: '05-12', pv: 67 },
  { name: '05-13', pv: 86 },
  { name: '05-14', pv: 81 },
  { name: '05-15', pv: 71 },
  { name: '05-16', pv: 18 },
  { name: '05-17', pv: 33 },
];

const wechatSourceData = [
  { name: '朋友圈', value: 34.7 },
  { name: '服务号消息', value: 26.5 },
  { name: '搜一搜', value: 26.5 },
  { name: '服务号主页', value: 12.9 },
  { name: '聊天会话', value: 2.7 },
  { name: '其它', value: 1.4 },
];

export default function App() {
  // State for editable fields
  const [reportTitle, setReportTitle] = useState('工作周报');
  const [reporterName, setReporterName] = useState('Amos');
  const [reportDate, setReportDate] = useState('2026-05-11到2026-05-15');
  
  const [section1Title, setSection1Title] = useState('一、核心数据与流量趋势');
  const [section2Title, setSection2Title] = useState('二、新媒体矩阵');
  const [section3Title, setSection3Title] = useState('三、高价值客询');
  const [section4Title, setSection4Title] = useState('四、SEO排名情况');
  const [section5Title, setSection5Title] = useState('五、其它');
  const [section6Title, setSection6Title] = useState('六、周报总结');

  // Media Matrix State
  const [elaineVideos, setElaineVideos] = useState([
    { id: 1, title: '转行后的厂妹出差及拜访日常', date: '2026-05-17', views: '329', hearts: '6', likes: '-', comments: '1', forwards: '12', follows: '-', completion: '-', interaction: '5.78%' },
    { id: 2, title: '插片保险丝的小型化方案', date: '2026-05-14', views: '1278', hearts: '50', likes: '38', comments: '9', forwards: '28', follows: '5', completion: '10.80%', interaction: '6.81%' },
    { id: 3, title: '涨价不可怕，没预案才可怕', date: '2026-05-11', views: '3020', hearts: '68', likes: '80', comments: '15', forwards: '32', follows: '9', completion: '6.59%', interaction: '3.81%' },
  ]);
  const [elaineSummary, setElaineSummary] = useState('Elaine本周重点发布了三条视频，其中“涨价不可怕，没预案才可怕”数据表现最好，播放量达3020次，带来9个新增关注。内容贴合行情热点，引发了较好的用户互动。');

  const [jessicaVideos, setJessicaVideos] = useState([
    { id: 1, title: 'TVS为什么能反应这么快', date: '2026-05-15', views: '1305', likes: '25', comments: '7', forwards: '9', completion: '-' },
    { id: 2, title: '很多芯片真正怕的', date: '2026-05-13', views: '2061', likes: '30', comments: '10', forwards: '12', completion: '-' },
    { id: 3, title: '制造业个人成长', date: '2026-05-11', views: '4495', likes: '43', comments: '20', forwards: '30', completion: '-' },
  ]);
  const [jessicaSummary, setJessicaSummary] = useState('Jessica本周发布三条内容，其中“制造业个人成长”播放量最高（4495次），职场类话题更容易破圈获得大众流量；而技术类话题（TVS等）播放量稳定在1000-2000之间，流量更精准。');

  const [amosVideos, setAmosVideos] = useState([
    { id: 1, title: '户外LED雷击', date: '2026-05-12', views: '1102', hearts: '19', likes: '28', comments: '5', forwards: '13', follows: '3', completion: '2.81%', interaction: '5.56%' },
    { id: 2, title: '什么是TVS', date: '2026-05-13', views: '1484', hearts: '21', likes: '27', comments: '2', forwards: '21', follows: '17', completion: '7.55%', interaction: '5.81%' },
  ]);
  const [amosDouyin, setAmosDouyin] = useState([
    { id: 1, title: '什么是TVS', views: '2945', completion: '5.19%', follows: '12', likes: '75', favs: '25', coverClick: '93.75%' },
  ]);
  const [amosSummary, setAmosSummary] = useState('Amos本周视频号和抖音同步分发，“什么是TVS”在抖音获得了2945次播放和12个新增关注，封面点击率高达93.75%，说明标题和封面设计非常成功。视频号端表现也较为稳定，两平台累计带来超30个关注。');

  const [otherSummary, setOtherSummary] = useState('');
  const [weeklySummary, setWeeklySummary] = useState('本周官网浏览量基本稳定，高质量客询（如赛福特电子）表明SEO带来了精准的大客户。公众号新增关注2人均来自文章页，仍需稳定输出专业内容。新媒体矩阵（Elaine/Jessica/Amos）已形成初步规模，各具特色，其中认知/成长类话题易获高流量，专业科普类话题带来了精准留资。');
  
  const [inquiries, setInquiries] = useState([
    { id: 1, name: '上海赛福特电子有限公司', partNo: '0467.500NRHF', usage: '200k', app: '烟雾报警器', date: '2026-05-14', status: '邮件询价中', mpDate: '2026-12' },
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
                    新增关注人数
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    均来自文章页关注
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
                  <div className="text-2xl font-bold">429 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    新访客占比91.1%
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    询价人数
                    <Search className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    终端客户1人
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    文章阅读量
                    <Eye className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">114 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-amber-600 mt-1">
                    正常波动
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
              <h3 className="text-lg font-semibold text-slate-800">Elaine <span className="text-sm font-normal text-slate-500 ml-2">视频号</span></h3>
              <div className="border rounded-lg overflow-hidden print:border-slate-300">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>标题</TableHead>
                      <TableHead>发布日期</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>红心 / 点赞 / 评论 / 转发</TableHead>
                      <TableHead>新增关注</TableHead>
                      <TableHead>完播率</TableHead>
                      <TableHead>基础互动率</TableHead>
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
              <Textarea 
                value={elaineSummary}
                onChange={(e) => setElaineSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Elaine数据总结分析..."
              />
            </div>

            {/* Jessica */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-semibold text-slate-800">Jessica <span className="text-sm font-normal text-slate-500 ml-2">视频号</span></h3>
              <div className="border rounded-lg overflow-hidden print:border-slate-300">
                <Table>
                  <TableHeader className="bg-slate-50 print:bg-slate-100">
                    <TableRow>
                      <TableHead>标题</TableHead>
                      <TableHead>发布日期</TableHead>
                      <TableHead>播放量</TableHead>
                      <TableHead>点赞</TableHead>
                      <TableHead>评论</TableHead>
                      <TableHead>转发</TableHead>
                      <TableHead>完播率</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jessicaVideos.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.likes}</TableCell>
                        <TableCell>{item.comments}</TableCell>
                        <TableCell>{item.forwards}</TableCell>
                        <TableCell>{item.completion}</TableCell>
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
                      <TableHead>基础互动率</TableHead>
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
