import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Activity, PlaySquare, Clock, BarChart3, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const websiteTrafficData = [
  { name: '06-15', pv: 101 },
  { name: '06-16', pv: 140 },
  { name: '06-17', pv: 110 },
  { name: '06-18', pv: 99 },
  { name: '06-19', pv: 31 },
  { name: '06-20', pv: 25 },
  { name: '06-21', pv: 56 },
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
  const [reportDate, setReportDate] = useState('2026-06-15到2026-06-21');
  
  const [section1Title, setSection1Title] = useState('一、核心数据与流量趋势');
  const [section2Title, setSection2Title] = useState('二、新媒体矩阵个人数据分析');
  const [section4Title, setSection4Title] = useState('三、SEO排名情况');
  const [sectionGeoTitle, setSectionGeoTitle] = useState('四、GEO（AI搜索推荐）收录情况');
  const [section6Title, setSection6Title] = useState('五、周报总结');

  // Core metrics states
  const [followersCount, setFollowersCount] = useState('1573');
  const [followersSub, setFollowersSub] = useState('视频号与抖音涨粉 (上周 166)');
  const [trafficCount, setTrafficCount] = useState('562');
  const [trafficSub, setTrafficSub] = useState('新客98.7% (上周 993)');
  const [inquiryCount, setInquiryCount] = useState('5');
  const [inquirySub, setInquirySub] = useState('官网 4 人, 抖音推荐 1 人 (上周 3)');
  const [wechatFollowsCount, setWechatFollowsCount] = useState('1');
  const [wechatFollowsSub, setWechatFollowsSub] = useState('文章页 1 人 (上周 2)');

  // Media Matrix State
  const [elaineVideos, setElaineVideos] = useState([
    { id: 1, title: '30年一件事，电路保护更安心', date: '2026/6/17', views: '3923', hearts: '102', likes: '113', comments: '22', forwards: '37', follows: '11', completion: '5.81%', inquiry: '--' },
    { id: 2, title: '供应商报价便宜一半，为什么我反而更担心', date: '2026/6/20', views: '1118', hearts: '46', likes: '37', comments: '7', forwards: '6', follows: '3', completion: '6.61%', inquiry: '--' },
    { id: 3, title: '老板要降本，工程师却不敢签字?风险量化才是关键', date: '2026/6/21', views: '180', hearts: '22', likes: '13', comments: '1', forwards: '2', follows: '1', completion: '4.19%', inquiry: '--' },
  ]);
  const [elaineDouyin, setElaineDouyin] = useState([
    { id: 1, title: '30年一件事，电路保护更安心', date: '2026/6/17', views: '--', completion: '1.12%', follows: '9', likes: '15', comments: '0', shares: '0', favs: '3', inquiry: '--', coverClick: '--' },
    { id: 2, title: '供应商报价便宜一半，为什么我反而更担心', date: '2026/6/20', views: '--', completion: '1.64%', follows: '8', likes: '15', comments: '3', shares: '0', favs: '5', inquiry: '--', coverClick: '--' },
    { id: 3, title: '老板要降本，工程师却不敢签字?风险量化才是关键', date: '2026/6/21', views: '--', completion: '0.78%', follows: '2', likes: '5', comments: '0', shares: '4', favs: '0', inquiry: '--', coverClick: '--' },
  ]);
  const [elaineSummary, setElaineSummary] = useState('Elaine本周共发布3条视频。视频号端《30年一件事，电路保护更安心》表现最出色，播放量达3923，点赞113并带来11个新增关注。抖音端在点赞 and 粉丝转化方面稳健，两篇主推视频均收获15个赞，累计带来19名新增粉丝。双平台内容均围绕电路保护、采购避坑与量化风控等高专业度选题，切中受众痛点。');

  const [jessicaVideos, setJessicaVideos] = useState([
    { id: 1, title: 'eFuse为什么不能完全替代保险丝？', date: '2026/6/15', views: '1010', hearts: '22', likes: '20', comments: '5', forwards: '3', follows: '2', completion: '7.88%', inquiry: '--' },
    { id: 2, title: '为什么电源效率永远做不到100%？', date: '2026/6/17', views: '1002', hearts: '38', likes: '32', comments: '4', forwards: '4', follows: '4', completion: '6.10%', inquiry: '--' },
    { id: 3, title: '6A烧，10A也烧。问题不在安培数', date: '2026/6/20', views: '710', hearts: '22', likes: '20', comments: '10', forwards: '5', follows: '3', completion: '14.14%', inquiry: '--' },
  ]);
  const [jessicaDouyin, setJessicaDouyin] = useState([
    { id: 1, title: 'eFuse为什么不能完全替代保险丝？', date: '2026/6/15', views: '789', completion: '5.25%', follows: '1', likes: '11', comments: '0', shares: '1', favs: '3', inquiry: '--', coverClick: '--' },
    { id: 2, title: '为什么电源效率永远做不到100%？', date: '2026/6/17', views: '1530', completion: '2.90%', follows: '7', likes: '31', comments: '1', shares: '0', favs: '8', inquiry: '--', coverClick: '--' },
    { id: 3, title: '6A烧，10A也烧。问题不在安培数', date: '2026/6/20', views: '3502', completion: '4.32%', follows: '5', likes: '43', comments: '6', shares: '3', favs: '17', inquiry: '--', coverClick: '--' },
  ]);
  const [jessicaSummary, setJessicaSummary] = useState('Jessica本周深耕电子工程核心科普课题。视频号端，两篇破千播放视频《eFuse为什么不能完全替代保险丝？》和《为什么电源效率永远做不到100%？》表现抢眼，完播率分别达7.88%与6.10%。抖音端《6A烧，10A也烧。问题不在安培数》引起强烈共鸣，播放量直冲3502次，吸流点赞43个，收藏达17次，并转化5名行业内的精准关注，专业产品科普的长期复利正逐步显现。');

  const [amosVideos, setAmosVideos] = useState([
    { id: 1, title: '从1万伏到1付', date: '2026/6/16', views: '2.1w', hearts: '74', likes: '242', comments: '26', forwards: '472', follows: '590', completion: '9.96%', inquiry: '--' },
    { id: 2, title: '为什么AI服务器一定要用800v', date: '2026/6/17', views: '1.3w', hearts: '46', likes: '121', comments: '18', forwards: '238', follows: '230', completion: '10.70%', inquiry: '--' },
  ]);
  const [amosDouyin, setAmosDouyin] = useState([
    { id: 1, title: '从1万伏到1付', date: '2026/6/16', views: '8.6W', completion: '2.82%', follows: '660', likes: '1172', comments: '127', shares: '298', favs: '734', inquiry: '--', coverClick: '--' },
    { id: 2, title: '为什么AI服务器一定要用800v', date: '2026/6/17', views: '1.4w', completion: '2.66%', follows: '84', likes: '165', comments: '26', shares: '18', favs: '110', inquiry: '--', coverClick: '--' },
  ]);
  const [amosSummary, setAmosSummary] = useState('Amos本周多款重量级中重度科普视频数据大爆发，实现双端流量闭环。视频号端《从1万伏到1付》和《为什么AI服务器一定要用800v》分别斩获2.1W+及1.3W+级别的海量播放，分别带来590和230的新增涨粉，转发动作极其强劲，分别达472次及238次！抖音端双视频更是迎来狂飙，尤其是《从1万伏到1付》曝光直逼8.6W+，点赞暴涨至1172个，收藏拉升至734个，单一频带来660涨粉。全团粉丝转化及品牌硬核技术深度种草心智大幅提振。');

  const [weeklySummary, setWeeklySummary] = useState('1. 核心流量趋势：本周新媒体总体暴涨粉1573人（上周166人），增幅达847%！主要得益于Amos《从1万伏到1付》及《为什么AI服务器一定要用800v》双端大爆，合计斩获13.4W+播放。官网流量周PV为562（上周993），虽由于正常业务周波动有所平滑，但整体留存与受众咨询行为良好，保持健康粘性。\n2. 精准客户询盘：本周共承接官网等核心业务咨询客询5人（上周3人），保持平稳上升势头。咨询需求逐步向电路保护、器件规格深度国产替代选型靠拢，凸显自然引流受众极高的客户专业壁垒与高质量。\n3. 矩阵表现分析：Elaine、Jessica与Amos三位成员本周新媒体矩阵各单体分析完备且带有动态图表辅助：Elaine精准刺中行业避坑防险选题，双端累计吸流5.6k+；Jessica主攻硬核元器件科普《eFuse不能完全替保险丝》，完播率表现极为喜人；Amos则迎来了数据现象级红利，双料爆款突破超13.4w播放，全团粉丝转化及内容转化通道通畅。\n4. 搜索与GEO布局：SEO百度关键词继续保持稳固的垄断霸屏（多个词稳居百度第一），同时GEO（AI搜索工程推荐）建设扎实推进，核心词在“千问”、“豆包”中持续占有推荐水位，源头切中下一代智能化搜索入口流量。');

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
  const addElaineVideo = () => setElaineVideos([...elaineVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/21', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '0', completion: '0%', inquiry: '--' }]);
  const updateElaineVideo = (id: number, field: string, value: string) => setElaineVideos(elaineVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeElaineVideo = (id: number) => setElaineVideos(elaineVideos.filter(v => v.id !== id));
  
  const addElaineDouyin = () => setElaineDouyin([...elaineDouyin, { id: Date.now(), title: '新抖音视频', date: '2026/6/21', views: '0', completion: '0%', follows: '0', likes: '0', comments: '0', shares: '0', favs: '0', inquiry: '--', coverClick: '--' }]);
  const updateElaineDouyin = (id: number, field: string, value: string) => setElaineDouyin(elaineDouyin.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeElaineDouyin = (id: number) => setElaineDouyin(elaineDouyin.filter(v => v.id !== id));
 
  const addJessicaVideo = () => setJessicaVideos([...jessicaVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/21', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '0', completion: '0%', inquiry: '--' }]);
  const updateJessicaVideo = (id: number, field: string, value: string) => setJessicaVideos(jessicaVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeJessicaVideo = (id: number) => setJessicaVideos(jessicaVideos.filter(v => v.id !== id));
 
  const addJessicaDouyin = () => setJessicaDouyin([...jessicaDouyin, { id: Date.now(), title: '新抖音视频', date: '2026/6/21', views: '0', completion: '0%', follows: '0', likes: '0', comments: '0', shares: '0', favs: '0', inquiry: '--', coverClick: '--' }]);
  const updateJessicaDouyin = (id: number, field: string, value: string) => setJessicaDouyin(jessicaDouyin.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeJessicaDouyin = (id: number) => setJessicaDouyin(jessicaDouyin.filter(v => v.id !== id));
 
  const addAmosVideo = () => setAmosVideos([...amosVideos, { id: Date.now(), title: '新发布视频', date: '2026/6/21', views: '0', hearts: '0', likes: '0', comments: '0', forwards: '0', follows: '0', completion: '0%', inquiry: '--' }]);
  const updateAmosVideo = (id: number, field: string, value: string) => setAmosVideos(amosVideos.map(v => v.id === id ? { ...v, [field]: value } : v));
  const removeAmosVideo = (id: number) => setAmosVideos(amosVideos.filter(v => v.id !== id));
 
  const addAmosDouyin = () => setAmosDouyin([...amosDouyin, { id: Date.now(), title: '新抖音视频', date: '2026/6/21', views: '0', completion: '0%', follows: '0', likes: '0', comments: '0', shares: '0', favs: '0', inquiry: '--', coverClick: '--' }]);
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
                <CardContent className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <Input 
                      value={followersCount}
                      onChange={(e) => setFollowersCount(e.target.value)}
                      className="text-2xl font-bold border-none shadow-none focus-visible:ring-0 p-0 h-auto w-24 bg-transparent font-mono"
                    />
                    <span className="text-sm font-normal text-slate-500">人</span>
                  </div>
                  <Input 
                    value={followersSub}
                    onChange={(e) => setFollowersSub(e.target.value)}
                    className="text-xs text-blue-600 border-none shadow-none focus-visible:ring-0 p-0 h-auto bg-transparent w-full"
                  />
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网浏览量
                    <MousePointerClick className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <Input 
                      value={trafficCount}
                      onChange={(e) => setTrafficCount(e.target.value)}
                      className="text-2xl font-bold border-none shadow-none focus-visible:ring-0 p-0 h-auto w-24 bg-transparent font-mono"
                    />
                    <span className="text-sm font-normal text-slate-500">次</span>
                  </div>
                  <Input 
                    value={trafficSub}
                    onChange={(e) => setTrafficSub(e.target.value)}
                    className="text-xs text-emerald-600 border-none shadow-none focus-visible:ring-0 p-0 h-auto bg-transparent w-full"
                  />
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    询价人数
                    <Search className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <Input 
                      value={inquiryCount}
                      onChange={(e) => setInquiryCount(e.target.value)}
                      className="text-2xl font-bold border-none shadow-none focus-visible:ring-0 p-0 h-auto w-24 bg-transparent font-mono"
                    />
                    <span className="text-sm font-normal text-slate-500">人</span>
                  </div>
                  <Input 
                    value={inquirySub}
                    onChange={(e) => setInquirySub(e.target.value)}
                    className="text-xs text-emerald-600 border-none shadow-none focus-visible:ring-0 p-0 h-auto bg-transparent w-full"
                  />
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号关注
                    <Eye className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <Input 
                      value={wechatFollowsCount}
                      onChange={(e) => setWechatFollowsCount(e.target.value)}
                      className="text-2xl font-bold border-none shadow-none focus-visible:ring-0 p-0 h-auto w-24 bg-transparent font-mono"
                    />
                    <span className="text-sm font-normal text-slate-500">人</span>
                  </div>
                  <Input 
                    value={wechatFollowsSub}
                    onChange={(e) => setWechatFollowsSub(e.target.value)}
                    className="text-xs text-amber-600 border-none shadow-none focus-visible:ring-0 p-0 h-auto bg-transparent w-full"
                  />
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

              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Elaine - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>视频号平台（支持单元格修改）</span>
                    </div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[900px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">红心</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">转发</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-indigo-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {elaineVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateElaineVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateElaineVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
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
                                <Input 
                                  value={item.hearts} 
                                  onChange={(e) => updateElaineVideo(item.id, 'hearts', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateElaineVideo(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments} 
                                  onChange={(e) => updateElaineVideo(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.forwards} 
                                  onChange={(e) => updateElaineVideo(item.id, 'forwards', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateElaineVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateElaineVideo(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-indigo-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateElaineVideo(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={11} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
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
                      <Table className="min-w-[950px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">分享</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-emerald-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {elaineDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date || '--'} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
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
                                  value={item.likes} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments || '0'} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.shares || '0'} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'shares', e.target.value)}
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
                                  value={item.completion} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-emerald-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateElaineDouyin(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={12} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
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

              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Jessica - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">视频号平台（支持单元格修改）</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[900px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">红心</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">转发</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-indigo-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {jessicaVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
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
                                <Input 
                                  value={item.hearts} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'hearts', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.forwards} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'forwards', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-indigo-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateJessicaVideo(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={11} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
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
                      <Table className="min-w-[950px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">分享</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-emerald-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {jessicaDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date || '--'} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
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
                                  value={item.likes} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments || '0'} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.shares || '0'} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'shares', e.target.value)}
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
                                  value={item.completion} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-emerald-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateJessicaDouyin(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={12} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
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

              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Amos - WeChat Channels */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">视频号平台（支持单元格修改）</div>
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                      <Table className="min-w-[900px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">红心</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">转发</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-indigo-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {amosVideos.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date} 
                                  onChange={(e) => updateAmosVideo(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.title} 
                                  onChange={(e) => updateAmosVideo(item.id, 'title', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-2 h-7 text-xs bg-transparent"
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
                                <Input 
                                  value={item.hearts} 
                                  onChange={(e) => updateAmosVideo(item.id, 'hearts', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.likes} 
                                  onChange={(e) => updateAmosVideo(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments} 
                                  onChange={(e) => updateAmosVideo(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.forwards} 
                                  onChange={(e) => updateAmosVideo(item.id, 'forwards', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.completion} 
                                  onChange={(e) => updateAmosVideo(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateAmosVideo(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-indigo-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateAmosVideo(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={11} className="text-center text-slate-400 text-xs py-4">无视频号视频，请点击添加</TableCell>
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
                      <Table className="min-w-[950px]">
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="py-2 text-xs w-[10%] text-center">发布日期</TableHead>
                            <TableHead className="py-2 text-xs">视频标题</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center font-semibold">播放量</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">点赞</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">评论</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">分享</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">收藏</TableHead>
                            <TableHead className="py-2 text-xs w-[10%] text-center">完播率</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center font-bold text-emerald-600">涨粉</TableHead>
                            <TableHead className="py-2 text-xs w-[8%] text-center">询盘</TableHead>
                            <TableHead className="py-2 text-xs w-[9%] text-center">封面点击</TableHead>
                            <TableHead className="py-2 text-xs w-[5%] print:hidden"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {amosDouyin.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.date || '--'} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'date', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
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
                                  value={item.likes} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'likes', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.comments || '0'} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'comments', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.shares || '0'} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'shares', e.target.value)}
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
                                  value={item.completion} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'completion', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.follows} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'follows', e.target.value)}
                                  className="border-transparent hover:border-slate-200 focus:border-slate-300 focus-visible:ring-0 px-1 h-7 text-xs text-center bg-transparent font-bold font-mono text-emerald-600"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input 
                                  value={item.inquiry || '--'} 
                                  onChange={(e) => updateAmosDouyin(item.id, 'inquiry', e.target.value)}
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
                              <TableCell colSpan={12} className="text-center text-slate-400 text-xs py-4">无抖音视频记录，请点击添加</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
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
