import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Activity, PlaySquare, Clock, BarChart3, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const websiteTrafficData = [
  { name: '06-08', pv: 227 },
  { name: '06-09', pv: 134 },
  { name: '06-10', pv: 111 },
  { name: '06-11', pv: 106 },
  { name: '06-12', pv: 77 },
  { name: '06-13', pv: 128 },
  { name: '06-14', pv: 210 },
];

const wechatSourceData = [
  { name: '搜一搜', value: 34.9 },
  { name: '朋友圈', value: 26.9 },
  { name: '服务号消息', value: 25.9 },
  { name: '服务号主页', value: 9.2 },
  { name: '聊天会话', value: 3.1 },
  { name: '其它', value: 2.8 },
  { name: '推荐', value: 0.7 },
];

export default function App() {
  // State for editable fields
  const [reportTitle, setReportTitle] = useState('工作周报');
  const [reporterName, setReporterName] = useState('Amos');
  const [reportDate, setReportDate] = useState('2026-06-08到2026-06-12');
  
  const [section1Title, setSection1Title] = useState('一、核心数据与流量趋势');
  const [section2Title, setSection2Title] = useState('二、新媒体矩阵个人数据分析');
  const [section4Title, setSection4Title] = useState('三、SEO排名情况');
  const [sectionGeoTitle, setSectionGeoTitle] = useState('四、GEO（AI搜索推荐）收录情况');
  const [section6Title, setSection6Title] = useState('五、周报总结');

  // Media Matrix State
  const [elaineVideos, setElaineVideos] = useState([
    { id: 1, title: '江湖再见，祝你退休快乐', date: '2026/6/5', views: '3639', hearts: '88', likes: '68', comments: '13', forwards: '17', follows: '-', completion: '12.8%', interaction: '--' },
    { id: 2, title: '缺货后，价格就不重要了', date: '2026/6/10', views: '1797', hearts: '58', likes: '35', comments: '3', forwards: '10', follows: '0', completion: '6.18%', interaction: '--' },
    { id: 3, title: '缺货潮下 3 问避坑指南', date: '2026/6/13', views: '635', hearts: '35', likes: '25', comments: '5', forwards: '3', follows: '0', completion: '4.09%', interaction: '--' },
  ]);
  const [elaineDouyin, setElaineDouyin] = useState([
    { id: 1, title: '江湖再见，祝你退休快乐 (6/5)', views: '1325', completion: '-', follows: '1', likes: '16', favs: '2', coverClick: '--' },
    { id: 2, title: '缺货后，价格就不重要了 (6/10)', views: '1169', completion: '3.43%', follows: '5', likes: '16', favs: '4', coverClick: '--' },
    { id: 3, title: '缺货潮下 3 问避坑指南 (6/13)', views: '314', completion: '2.49%', follows: '0', likes: '7', favs: '2', coverClick: '--' },
  ]);
  const [elaineSummary, setElaineSummary] = useState('Elaine本周重点深耕缺货潮防坑及价格洞察选题，视频号端《缺货后，价格就不重要了》获得1797次播放，抖音端也收获1169次播放及5名新增关注。此外，由于情感化选题生命力强，上周发布的退港情怀主题视频在抖音仍在持续发挥长尾效应且斩获精准关注，整体内容策划兼顾专业科普和行业深度，传播力优良。');

  const [jessicaVideos, setJessicaVideos] = useState([
    { id: 1, title: '有了TVS为什么还要MOV？', date: '2026/6/3', views: '1305', hearts: '27', likes: '3', comments: '6', forwards: '6', follows: '4', completion: '10.5%', interaction: '--' },
    { id: 2, title: '这家公司有点特别', date: '2026/6/5', views: '1933', hearts: '47', likes: '36', comments: '20', forwards: '6', follows: '3', completion: '26.68%', interaction: '--' },
    { id: 3, title: '一个电路里，到底应该放几颗保险丝', date: '2026/6/8', views: '1157', hearts: '28', likes: '21', comments: '5', forwards: '2', follows: '0', completion: '8.21%', interaction: '--' },
    { id: 4, title: '碳化硅火', date: '2026/6/11', views: '1092', hearts: '32', likes: '21', comments: '5', forwards: '5', follows: '2', completion: '6.04%', interaction: '--' },
    { id: 5, title: 'eFuse电子保险丝电子在哪', date: '2026/6/12', views: '700', hearts: '25', likes: '24', comments: '5', forwards: '2', follows: '3', completion: '5.03%', interaction: '--' },
  ]);
  const [jessicaDouyin, setJessicaDouyin] = useState([
    { id: 1, title: '有了TVS为什么还要MOV？ (6/3)', views: '2370', completion: '6.56%', follows: '-', likes: '60', favs: '27', coverClick: '--' },
    { id: 2, title: '这家公司有点特别 (6/5)', views: '270', completion: '7.01%', follows: '-', likes: '5', favs: '-', coverClick: '--' },
    { id: 3, title: '碳化硅火 (6/11)', views: '4800', completion: '4.67%', follows: '22', likes: '63', favs: '23', coverClick: '--' },
    { id: 4, title: 'eFuse电子保险丝电子在哪 (6/12)', views: '1804', completion: '3.92%', follows: '9', likes: '29', favs: '7', coverClick: '--' },
  ]);
  const [jessicaSummary, setJessicaSummary] = useState('Jessica本周视频策划非常务实而精准，重点针对“碳化硅”和“eFuse电子保险丝”进行技术拆解，在抖音端引起了良好反响。其中《碳化硅火》抖音播放量高达4800次并直接带来22名新增业内关注；视频号端《这家公司有点特别》和《一个电路里到底放几颗保险丝》也凭借通俗易懂的表述实现极高完播率与强分享，极大提升了品牌技术曝光。');

  const [amosVideos, setAmosVideos] = useState([
    { id: 1, title: 'MOS管极简选型', date: '2026/6/2', views: '906', hearts: '17', likes: '13', comments: '2', forwards: '11', follows: '3', completion: '4.08%', interaction: '--' },
    { id: 2, title: '二极管电路门卫', date: '2026/6/5', views: '1287', hearts: '23', likes: '23', comments: '1', forwards: '12', follows: '20', completion: '10.88%', interaction: '--' },
    { id: 3, title: '二极管不等于晶体管', date: '2026/6/9', views: '729', hearts: '21', likes: '16', comments: '1', forwards: '7', follows: '1', completion: '5.21%', interaction: '--' },
    { id: 4, title: 'A i服务器、功率半导体全线涨价', date: '2026/6/10', views: '11215', hearts: '53', likes: '90', comments: '25', forwards: '276', follows: '98', completion: '12.88%', interaction: '--' },
  ]);
  const [amosDouyin, setAmosDouyin] = useState([
    { id: 1, title: 'MOS管极简选型 (6/2)', views: '2.1w', completion: '2.27%', follows: '109', likes: '500', favs: '445', coverClick: '1 询盘 (C&K开关)' },
    { id: 2, title: '二极管电路门卫 (6/5)', views: '4692', completion: '3.5%', follows: '11', likes: '68', favs: '52', coverClick: '--' },
    { id: 3, title: '二极管不等于晶体管 (6/9)', views: '2700', completion: '2.56%', follows: '2', likes: '45', favs: '31', coverClick: '--' },
    { id: 4, title: 'A i服务器、功率半导体全线涨价 (6/10)', views: '7031', completion: '5.17%', follows: '33', likes: '80', favs: '26', coverClick: '--' },
  ]);
  const [amosSummary, setAmosSummary] = useState('Amos本周多款视频迎来数据爆发。视频号端发布的《A i服务器、功率半导体全线涨价》凭借前沿热点直接斩获1.1W+播放、276次大额转发以及98名新增关注，完播率高达12.88%；抖音端《MOS管极简选型》保持强势长尾流量，破2.1W+播放并获109个新增涨粉，更惊喜引流1个具体的力特-C&K开关询盘，内容带货变现路径已全盘打通。');

  const [weeklySummary, setWeeklySummary] = useState('1. 官网与自然引流：本周官网总浏览量突破993次，新客占比达98.7%。深入挖掘日志发现，主要增长由Google爬虫贡献（618次爬取），刨除后实际自然访客达375人，整体自然引流依然维持高客质水位，转化路径通畅。\n2. 询盘变现稳健攀升：本周高价值询盘人数达到5人（上周3人），呈现出良性攀升形态。最令人振奋的是，Amos抖音发布的《MOS管极简选型》斩获高达2.1W播放 and 109个关注的同时，直接转化引流了1单针对力特-C&K开关规格需求的高质量客户，内容带货变现探索取得关键实效。\n3. 新媒体播放量狂飙：本周新媒体总体涨粉166人！重点是在10日Amos发布的技术风口热点《A i服务器、功率半导体全线涨价》，在视频号引爆播放达11215次，单条获得276次转发、98名关注；各成员科普与情怀内容矩阵相辅相成，漏斗效应明显。\n4. 搜索与GEO建设：传统SEO关键词稳居前列（多个词百度排名第一）。同时正式展开对主流AI搜索引擎（千问、元宝、豆包）的GEO收录建设，目前 “力特代理商”、“Littelfuse上海代理” 在千问和豆包均取得优秀收录和推荐，AI搜索引流初显成效。');

  const [seo, setSeo] = useState([
    { id: 1, keyword: 'KSS华东代理', rank: '排名第一' },
    { id: 2, keyword: '凯士士华东代理', rank: '排名第一' },
    { id: 3, keyword: 'KSS上海代理', rank: '排名第一' },
    { id: 4, keyword: '上海凯士士代理', rank: '排名第二' },
    { id: 5, keyword: '上海力特代理商', rank: '排名第一' },
    { id: 6, keyword: '力特代理商', rank: '第二页第3条' },
    { id: 7, keyword: 'Littelfuse上海代理', rank: '排名第一' },
  ]);

  const [geo, setGeo] = useState([
    { id: 1, keyword: 'KSS华东代理', qwen: '', yuanbao: '', doubao: '有' },
    { id: 2, keyword: '凯士士华东代理', qwen: '', yuanbao: '', doubao: '有' },
    { id: 3, keyword: 'KSS上海代理', qwen: '', yuanbao: '', doubao: '有' },
    { id: 4, keyword: '上海凯士士代理', qwen: '', yuanbao: '', doubao: '有' },
    { id: 5, keyword: '上海力特代理商', qwen: '有', yuanbao: '', doubao: '有' },
    { id: 6, keyword: '力特代理商', qwen: '有', yuanbao: '', doubao: '有' },
    { id: 7, keyword: 'Littelfuse上海代理', qwen: '有', yuanbao: '', doubao: '有' },
  ]);

  const addSeo = () => setSeo([...seo, { id: Date.now(), keyword: '', rank: '' }]);
  const updateSeo = (id: number, field: string, value: string) => setSeo(seo.map(p => p.id === id ? { ...p, [field]: value } : p));
  const removeSeo = (id: number) => setSeo(seo.filter(p => p.id !== id));

  const addGeo = () => setGeo([...geo, { id: Date.now(), keyword: '', qwen: '', yuanbao: '', doubao: '' }]);
  const updateGeo = (id: number, field: string, value: string) => setGeo(geo.map(p => p.id === id ? { ...p, [field]: value } : p));
  const removeGeo = (id: number) => setGeo(geo.filter(p => p.id !== id));

  // Helper to parse metric values (e.g., '2.1w' -> 21000, '3639' -> 3639, '--' -> 0)
  const parseMetricValue = (val: string | number | undefined): number => {
    if (val === undefined || val === null) return 0;
    const str = String(val).trim();
    if (str === '-' || str === '--') return 0;
    if (str.toLowerCase().endsWith('w')) {
      const num = parseFloat(str.slice(0, -1));
      return isNaN(num) ? 0 : num * 10000;
    }
    const cleanStr = str.replace(/[,，]/g, '');
    const num = parseFloat(cleanStr);
    return isNaN(num) ? 0 : num;
  };

  // Helper to align both Video号 and 抖音 videos for a person into interactive charts
  const getMatchedChartData = (videos: any[], douyin: any[]) => {
    const data: any[] = [];
    const visitedDouyinIds = new Set<number>();
    
    videos.forEach(v => {
      const cleanVidTitle = (v.title || '').replace(/[?？()（）\s]/g, '').toLowerCase();
      
      const matchedD = douyin.find(d => {
        if (visitedDouyinIds.has(d.id)) return false;
        const cleanDTitle = (d.title || '').split('(')[0].replace(/[?刻?？()（）\s]/g, '').toLowerCase();
        return cleanDTitle.includes(cleanVidTitle) || cleanVidTitle.includes(cleanDTitle);
      });
      
      let short = v.title || '视频';
      if (short.length > 7) short = short.substring(0, 7) + '...';
      
      if (matchedD) {
        visitedDouyinIds.add(matchedD.id);
        data.push({
          name: short,
          '视频号播放': parseMetricValue(v.views),
          '视频号点赞': parseMetricValue(v.likes || v.hearts),
          '抖音播放': parseMetricValue(matchedD.views),
          '抖音点赞': parseMetricValue(matchedD.likes),
        });
      } else {
        data.push({
          name: short,
          '视频号播放': parseMetricValue(v.views),
          '视频号点赞': parseMetricValue(v.likes || v.hearts),
          '抖音播放': 0,
          '抖音点赞': 0,
        });
      }
    });
    
    douyin.forEach(d => {
      if (!visitedDouyinIds.has(d.id)) {
        const cleanDTitle = (d.title || '').split('(')[0].trim();
        let short = cleanDTitle;
        if (short.length > 7) short = short.substring(0, 7) + '...';
        data.push({
          name: short,
          '视频号播放': 0,
          '视频号点赞': 0,
          '抖音播放': parseMetricValue(d.views),
          '抖音点赞': parseMetricValue(d.likes),
        });
      }
    });
    
    return data;
  };

  // Video号 and 抖音 management operations for all three people
  const addElaineVideo = () => setElaineVideos([...elaineVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/15', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '-', completion: '0%', interaction: '--' }]);
  const updateElaineVideo = (id: number, field: string, value: string) => setElaineVideos(elaineVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeElaineVideo = (id: number) => setElaineVideos(elaineVideos.filter(v => v.id !== id));
  
  const addElaineDouyin = () => setElaineDouyin([...elaineDouyin, { id: Date.now(), title: '新抖音视频', views: '0', completion: '-', follows: '0', likes: '0', favs: '0', coverClick: '--' }]);
  const updateElaineDouyin = (id: number, field: string, value: string) => setElaineDouyin(elaineDouyin.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeElaineDouyin = (id: number) => setElaineDouyin(elaineDouyin.filter(v => v.id !== id));

  const addJessicaVideo = () => setJessicaVideos([...jessicaVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/15', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '-', completion: '0%', interaction: '--' }]);
  const updateJessicaVideo = (id: number, field: string, value: string) => setJessicaVideos(jessicaVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeJessicaVideo = (id: number) => setJessicaVideos(jessicaVideos.filter(v => v.id !== id));

  const addJessicaDouyin = () => setJessicaDouyin([...jessicaDouyin, { id: Date.now(), title: '新抖音视频', views: '0', completion: '-', follows: '0', likes: '0', favs: '0', coverClick: '--' }]);
  const updateJessicaDouyin = (id: number, field: string, value: string) => setJessicaDouyin(jessicaDouyin.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeJessicaDouyin = (id: number) => setJessicaDouyin(jessicaDouyin.filter(v => v.id !== id));

  const addAmosVideo = () => setAmosVideos([...amosVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/15', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '-', completion: '0%', interaction: '--' }]);
  const updateAmosVideo = (id: number, field: string, value: string) => setAmosVideos(amosVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeAmosVideo = (id: number) => setAmosVideos(amosVideos.filter(v => v.id !== id));

  const addAmosDouyin = () => setAmosDouyin([...amosDouyin, { id: Date.now(), title: '新抖音视频', views: '0', completion: '-', follows: '0', likes: '0', favs: '0', coverClick: '--' }]);
  const updateAmosDouyin = (id: number, field: string, value: string) => setAmosDouyin(amosDouyin.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeAmosDouyin = (id: number) => setAmosDouyin(amosDouyin.filter(v => v.id !== id));


  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6 print:space-y-4">
        
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
                    新媒体涨粉
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">166 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    视频号与抖音涨粉 (上周 178)
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
                  <div className="text-2xl font-bold">993 <span className="text-sm font-normal text-slate-500">次</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    新客98.7% (谷歌爬取618)
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
                  <div className="text-2xl font-bold">5 <span className="text-sm font-normal text-slate-500">人</span></div>
                  <p className="text-xs text-emerald-600 mt-1">
                    官网 4 人, 抖音推荐 1 人
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
                    文章页 1 人, 搜一搜 1 人
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
            <div className="space-y-6 border-b pb-8 last:border-0">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-3 rounded-lg gap-2">
                <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                  <PlaySquare className="w-5 h-5 text-indigo-500" />
                  <span>Elaine 的视频投放分析</span>
                </h3>
                <div className="flex gap-2 print:hidden">
                  <Button variant="outline" size="sm" onClick={addElaineVideo} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 视频号记录
                  </Button>
                  <Button variant="outline" size="sm" onClick={addElaineDouyin} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 抖音记录
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="xl:col-span-8 space-y-4">
                  {/* Elaine - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>视频号平台（支持单元格修改）</span>
                    </div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[25%] text-center">红心 / 点赞 / 转发</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {elaineVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateElaineVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateElaineVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateElaineVideo(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <div className="flex items-center gap-1 justify-center">
                                  <Input 
                                    value={item.hearts} 
                                    placeholder="红"
                                    onChange={(e) => updateElaineVideo(item.id, 'hearts', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.likes} 
                                    placeholder="赞"
                                    onChange={(e) => updateElaineVideo(item.id, 'likes', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.forwards} 
                                    placeholder="转"
                                    onChange={(e) => updateElaineVideo(item.id, 'forwards', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateElaineVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeElaineVideo(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {elaineVideos.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  {/* Elaine - Douyin */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">抖音平台</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">关注</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[16%]">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {elaineDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.favs} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'favs', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.coverClick} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'coverClick', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeElaineDouyin(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {elaineDouyin.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={8} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* Elaine Chart Panel */}
                <div className="xl:col-span-4 flex flex-col justify-between">
                  <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 h-[380px] flex flex-col">
                    <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4 text-indigo-500" /> Elaine 双边播放对比</span>
                    </div>
                    <div className="flex-1 w-full mt-2 min-h-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={getMatchedChartData(elaineVideos, elaineDouyin)} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#64748b' }} interval={0} />
                          <YAxis tick={{ fontSize: 9, fill: '#64748b' }} />
                          <Tooltip contentStyle={{ fontSize: 11 }} />
                          <Legend wrapperStyle={{ fontSize: 9 }} />
                          <Bar dataKey="视频号播放" fill="#6366f1" name="视频号播放" radius={[3, 3, 0, 0]} />
                          <Bar dataKey="抖音播放" fill="#10b981" name="抖音播放" radius={[3, 3, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-[10px] text-center text-slate-400 mt-2">（数据自动折合，输入'w'或'万'可自动转换对比）</div>
                  </div>
                </div>
              </div>

              <Textarea 
                value={elaineSummary}
                onChange={(e) => setElaineSummary(e.target.value)}
                className="min-h-[80px] text-xs leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/40 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Elaine数据总结分析..."
              />
            </div>

            {/* Jessica */}
            <div className="space-y-6 border-b pb-8 last:border-0 pt-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-3 rounded-lg gap-2">
                <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                  <PlaySquare className="w-5 h-5 text-emerald-500" />
                  <span>Jessica 的视频投放分析</span>
                </h3>
                <div className="flex gap-2 print:hidden">
                  <Button variant="outline" size="sm" onClick={addJessicaVideo} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 视频号记录
                  </Button>
                  <Button variant="outline" size="sm" onClick={addJessicaDouyin} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 抖音记录
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="xl:col-span-8 space-y-4">
                  {/* Jessica - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">视频号平台（支持双击可修改）</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[25%] text-center">红心 / 点赞 / 转发</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {jessicaVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <div className="flex items-center gap-1 justify-center">
                                  <Input 
                                    value={item.hearts} 
                                    placeholder="红"
                                    onChange={(e) => updateJessicaVideo(item.id, 'hearts', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.likes} 
                                    placeholder="赞"
                                    onChange={(e) => updateJessicaVideo(item.id, 'likes', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.forwards} 
                                    placeholder="转"
                                    onChange={(e) => updateJessicaVideo(item.id, 'forwards', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeJessicaVideo(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {jessicaVideos.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  {/* Jessica - Douyin */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">抖音平台</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">关注</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[16%]">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {jessicaDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.favs} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'favs', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.coverClick} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'coverClick', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeJessicaDouyin(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {jessicaDouyin.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={8} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* Jessica Chart Panel */}
                <div className="xl:col-span-4 flex flex-col justify-between">
                  <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 h-[380px] flex flex-col">
                    <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4 text-emerald-500" /> Jessica 双边播放对比</span>
                    </div>
                    <div className="flex-1 w-full mt-2 min-h-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={getMatchedChartData(jessicaVideos, jessicaDouyin)} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#64748b' }} interval={0} />
                          <YAxis tick={{ fontSize: 9, fill: '#64748b' }} />
                          <Tooltip contentStyle={{ fontSize: 11 }} />
                          <Legend wrapperStyle={{ fontSize: 9 }} />
                          <Bar dataKey="视频号播放" fill="#10b981" name="视频号" radius={[3, 3, 0, 0]} />
                          <Bar dataKey="抖音播放" fill="#3b82f6" name="抖音" radius={[3, 3, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-[10px] text-center text-slate-400 mt-2">（数据自动折合，单元格修改后图表联动刷新）</div>
                  </div>
                </div>
              </div>

              <Textarea 
                value={jessicaSummary}
                onChange={(e) => setJessicaSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Jessica数据总结分析..."
              />
            </div>

            {/* Amos */}
            <div className="space-y-6 pt-4 last:border-0">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-3 rounded-lg gap-2">
                <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                  <PlaySquare className="w-5 h-5 text-orange-500" />
                  <span>Amos 的视频投放分析</span>
                </h3>
                <div className="flex gap-2 print:hidden">
                  <Button variant="outline" size="sm" onClick={addAmosVideo} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 视频号记录
                  </Button>
                  <Button variant="outline" size="sm" onClick={addAmosDouyin} className="h-8 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> 抖音记录
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="xl:col-span-8 space-y-4">
                  {/* Amos - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">视频号平台（支持双击可修改）</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[25%] text-center">红心 / 点赞 / 转发</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {amosVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateAmosVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateAmosVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateAmosVideo(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <div className="flex items-center gap-1 justify-center">
                                  <Input 
                                    value={item.hearts} 
                                    placeholder="红"
                                    onChange={(e) => updateAmosVideo(item.id, 'hearts', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.likes} 
                                    placeholder="赞"
                                    onChange={(e) => updateAmosVideo(item.id, 'likes', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                  <span>/</span>
                                  <Input 
                                    value={item.forwards} 
                                    placeholder="转"
                                    onChange={(e) => updateAmosVideo(item.id, 'forwards', e.target.value)}
                                    className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs w-10 text-center bg-transparent"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateAmosVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeAmosVideo(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {amosVideos.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  {/* Amos - Douyin */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">抖音平台</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[600px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">关注</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[12%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[16%]">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[6%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {amosDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.views} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'views', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-mono"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.favs} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'favs', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.coverClick} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'coverClick', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1 text-center print:hidden">
                                <Button variant="ghost" size="icon" onClick={() => removeAmosDouyin(item.id)} className="h-6 w-6 text-slate-400 hover:text-red-500">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {amosDouyin.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={8} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* Amos Chart Panel */}
                <div className="xl:col-span-4 flex flex-col justify-between">
                  <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 h-[380px] flex flex-col">
                    <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4 text-orange-500" /> Amos 双边播放对比</span>
                    </div>
                    <div className="flex-1 w-full mt-2 min-h-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={getMatchedChartData(amosVideos, amosDouyin)} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#64748b' }} interval={0} />
                          <YAxis tick={{ fontSize: 9, fill: '#64748b' }} />
                          <Tooltip contentStyle={{ fontSize: 11 }} />
                          <Legend wrapperStyle={{ fontSize: 9 }} />
                          <Bar dataKey="视频号播放" fill="#f97316" name="视频号" radius={[3, 3, 0, 0]} />
                          <Bar dataKey="抖音播放" fill="#3b82f6" name="抖音" radius={[3, 3, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-[10px] text-center text-slate-400 mt-2">（数据自动折合，单元格修改后图表联动刷新）</div>
                  </div>
                </div>
              </div>

              <Textarea 
                value={amosSummary}
                onChange={(e) => setAmosSummary(e.target.value)}
                className="min-h-[80px] text-sm leading-relaxed resize-none border-dashed border-slate-200 hover:border-slate-300 focus-visible:ring-1 focus-visible:border-slate-300 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:border-none print:min-h-0"
                placeholder="请输入Amos数据总结分析..."
              />
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

          {/* Section 4a: GEO Ranking Table */}
          <section className="space-y-4 print:break-inside-avoid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 w-full">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact shrink-0"></span>
                <Input 
                  value={sectionGeoTitle}
                  onChange={(e) => setSectionGeoTitle(e.target.value)}
                  className="text-xl font-bold border-none shadow-none focus-visible:ring-1 focus-visible:ring-slate-200 px-0 h-auto bg-transparent print:p-0 w-full"
                />
              </h2>
              <Button variant="outline" size="sm" onClick={addGeo} className="print:hidden shrink-0 ml-4">
                <Plus className="w-4 h-4 mr-1" /> 添加GEO
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[30%]">关键字</TableHead>
                    <TableHead className="w-[20%] text-center">千问</TableHead>
                    <TableHead className="w-[20%] text-center">元宝</TableHead>
                    <TableHead className="w-[20%] text-center">豆包</TableHead>
                    <TableHead className="w-[10%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {geo.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={item.keyword} 
                          onChange={(e) => updateGeo(item.id, 'keyword', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 text-slate-900 font-medium"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.qwen} 
                          onChange={(e) => updateGeo(item.id, 'qwen', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 font-medium text-center text-blue-600"
                          placeholder="-"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.yuanbao} 
                          onChange={(e) => updateGeo(item.id, 'yuanbao', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 font-medium text-center text-blue-600"
                          placeholder="-"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={item.doubao} 
                          onChange={(e) => updateGeo(item.id, 'doubao', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0 font-medium text-center text-blue-600"
                          placeholder="-"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => removeGeo(item.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {geo.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-slate-500 py-4 print:hidden">
                        暂无GEO排名信息，请点击添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
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
