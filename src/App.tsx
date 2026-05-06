import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Activity, PlaySquare, Clock, BarChart3, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const websiteTrafficData = [
  { name: '04-27', pv: 111 },
  { name: '04-28', pv: 142 },
  { name: '04-29', pv: 81 },
  { name: '05-01', pv: 28 },
  { name: '05-02', pv: 43 },
  { name: '05-03', pv: 26 },
  { name: '05-04', pv: 39 },
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
  const [reportDate, setReportDate] = useState('2026-04-27到2026-05-05');
  
  const [section1Title, setSection1Title] = useState('一、核心数据与流量趋势');
  const [section2Title, setSection2Title] = useState('二、视频号数据');
  const [section3Title, setSection3Title] = useState('三、留资询价明细');
  const [section4Title, setSection4Title] = useState('四、SEO排名情况');
  const [section5Title, setSection5Title] = useState('五、其它');
  const [section6Title, setSection6Title] = useState('六、周报总结');

  const [videoSummary, setVideoSummary] = useState('单条视频新增关注6人\n播放量969超过91.76%同类视频\n平均播放时长7.52秒超过56.12%同类视频\n3S以上完播率42.41% 超过31.68%同类视频');
  const [otherSummary, setOtherSummary] = useState('');
  const [weeklySummary, setWeeklySummary] = useState('官网询价维持正常水平，公众号和视频号用户关注转化率显著提高，可以看到整体播放阅读数据不及上一周；原因是大家都想过五一工作激情下滑。AMOS实验室公众号迎来首次询价。');
  
  const [inquiries, setInquiries] = useState([
    { id: 1, brand: '-', partNo: '-', usage: '-', type: '官网询价' },
    { id: 2, brand: '-', partNo: '-', usage: '-', type: '官网询价' },
    { id: 3, brand: '-', partNo: '-', usage: '-', type: '公众号询价' },
  ]);

  const [seo, setSeo] = useState([
    { id: 1, keyword: '上海力特代理', rank: '第一页第一' },
    { id: 2, keyword: 'KSS华东代理', rank: '第一页第一' },
    { id: 3, keyword: '上海凯士士代理', rank: '第一页第二' },
    { id: 4, keyword: '上海力特代理', rank: '第一页第一' },
  ]);

  const addInquiry = () => setInquiries([...inquiries, { id: Date.now(), brand: '', partNo: '', usage: '', type: '' }]);
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
                  <div className="text-2xl font-bold">6 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    用户关注转化率提升
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
                  <div className="text-2xl font-bold">700 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    新访客占比93.7%
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
                  <div className="text-2xl font-bold">3 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    官网2人，公众号1人
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
                  <div className="text-2xl font-bold">147 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-amber-600 mt-1">
                    因长假有所下滑
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

          {/* Section 2: Video Account Data */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
              <Input 
                value={section2Title}
                onChange={(e) => setSection2Title(e.target.value)}
                className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
              />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:grid-cols-4 mb-4">
              <Card className="print:shadow-none print:border-slate-200 bg-slate-50 border-none shadow-none print:bg-slate-50">
                <CardContent className="p-4 flex flex-col justify-center">
                  <div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1.5"><PlaySquare className="w-4 h-4"/>播放量</div>
                  <div className="text-2xl font-bold text-slate-900">969 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <div className="text-xs text-blue-600 mt-1">超过 91.76% 同类视频</div>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200 bg-slate-50 border-none shadow-none print:bg-slate-50">
                <CardContent className="p-4 flex flex-col justify-center">
                  <div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1.5"><Users className="w-4 h-4"/>新增关注</div>
                  <div className="text-2xl font-bold text-slate-900">6 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <div className="text-xs text-blue-600 mt-1">单条视频引流</div>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200 bg-slate-50 border-none shadow-none print:bg-slate-50">
                <CardContent className="p-4 flex flex-col justify-center">
                  <div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1.5"><Clock className="w-4 h-4"/>平均播放时长</div>
                  <div className="text-2xl font-bold text-slate-900">7.52 <span className="text-sm font-normal text-slate-500">秒</span></div>
                  <div className="text-xs text-blue-600 mt-1">超过 56.12% 同类视频</div>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200 bg-slate-50 border-none shadow-none print:bg-slate-50">
                <CardContent className="p-4 flex flex-col justify-center">
                  <div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1.5"><TrendingUp className="w-4 h-4"/>3S以上完播率</div>
                  <div className="text-2xl font-bold text-slate-900">42.41%</div>
                  <div className="text-xs text-blue-600 mt-1">超过 31.68% 同类视频</div>
                </CardContent>
              </Card>
            </div>

            <Textarea 
              value={videoSummary}
              onChange={(e) => setVideoSummary(e.target.value)}
              className="min-h-[100px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入视频号数据分析结论..."
            />
          </section>

          {/* Section 3: Inquiries Table */}
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
                <Plus className="w-4 h-4 mr-1" /> 添加留资
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[20%]">品牌</TableHead>
                    <TableHead className="w-[35%]">料号</TableHead>
                    <TableHead className="w-[20%]">用量</TableHead>
                    <TableHead className="w-[20%]">类型</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={item.brand} 
                          onChange={(e) => updateInquiry(item.id, 'brand', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.partNo} 
                          onChange={(e) => updateInquiry(item.id, 'partNo', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 font-mono text-sm"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.usage} 
                          onChange={(e) => updateInquiry(item.id, 'usage', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.type} 
                          onChange={(e) => updateInquiry(item.id, 'type', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
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
                      <TableCell colSpan={5} className="text-center text-slate-500 py-4 print:hidden">
                        暂无留资询价信息，请点击添加
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
