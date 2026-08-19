import { useState } from "react";

const tools = ["Skills", "MCP", "Plugins"];
const controls = [
  ["身份与组织", "ISC 身份 · 组织 · 角色"], ["场景与授权", "场景 Key · 配额 · 有效期"],
  ["Agent 治理", "注册 · 运行 · 限流 · 杀停"], ["调用与审计", "流量 · 日志 · 链路 · 追溯"],
];
const authTracks = [
  { number: "01", title: "ISC 身份认证", subtitle: "回答“谁在使用”", color: "cyan", path: ["员工登录", "组织 / 角色", "可用 Tools 清单"], note: "客户端按用户身份获取资源；用户身份随 MCP 请求向下游传递。" },
  { number: "02", title: "PX-Work 场景 Key", subtitle: "回答“为何调用模型”", color: "orange", path: ["场景获批", "专属 Key", "模型网关 / 配额"], note: "研发单位只通过服务端 SDK 与网关调用；底层模型算力不直接暴露。" },
  { number: "03", title: "MCP 服务鉴权", subtitle: "回答“能否执行操作”", color: "violet", path: ["传递委托身份", "对侧系统确认", "业务权限执行"], note: "交易平台、决策中枢保留最终鉴权权；PX-Work 不替代业务权限体系。" },
];
const lifecycle = [
  ["01", "需求提出", "业务部门明确目标与责任人"], ["02", "场景设计", "研发单位定义数据、模型、Tools 与风险"],
  ["03", "资源审批", "技术部核定算力、配额、时限与 Key"], ["04", "注册发布", "Tools 与专项 Agent 进入统一目录"],
  ["05", "受控运行", "网关观测行为与流量，策略实时生效"], ["06", "审计退出", "可追溯、可下架、可立即终止 Agent"],
];
const boundaries = [
  ["数据不另起炉灶", "结构化查询统一使用数据中台指标集服务；非结构化知识统一由知识中心承载。"],
  ["系统不被 AI 直连", "存量系统由供应商建设 MCP 服务，按交易平台、决策中枢两类标准接入。"],
  ["长期服务必须注册", "专项、持久化或与新系统集成的 AI 服务，必须以 Agent 形式登记后运行。"],
  ["终端能力本地受控", "本地执行权限、用户记忆、任务记录与会话管理按企业策略建设。"],
];
const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function App() {
  const [activeAuth, setActiveAuth] = useState(0);
  return <main>
    <header className="site-nav">
      <button className="brand" onClick={() => jumpTo("overview")} aria-label="返回首页"><span className="brand-mark">PX</span><b>PX-Work</b></button>
      <nav aria-label="章节导航"><button onClick={() => jumpTo("architecture")}>总体架构</button><button onClick={() => jumpTo("permission")}>权限体系</button><button onClick={() => jumpTo("delivery")}>建设闭环</button></nav>
      <span className="edition">企业人工智能统一控制平面 · 2026</span>
    </header>

    <section className="hero" id="overview">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy"><p className="kicker">ENTERPRISE AI CONTROL PLANE</p><h1>PX-Work框架<br/><em>和权限体系。</em></h1><p className="lead">PX-Work 将企业内网算力、模型、数据、知识与业务系统纳入一套统一控制平面，让每一次 AI 调用都身份明确、场景获批、过程可观测、结果可追溯。</p><div className="hero-actions"><button onClick={() => jumpTo("architecture")}>进入架构全景 <span>↘</span></button><p><b>核心原则</b>资源不直供 · 系统不直连 · 权限不旁路</p></div></div>
      <div className="hero-schematic" aria-label="从用户到企业资源的受控调用示意"><div className="schematic-top"><span>员工 / 业务部门</span><span>研发单位 / 专项 Agent</span></div><div className="auth-line"><i />ISC 身份 / 场景 Key<i /></div><div className="schematic-core"><small>唯一入口</small><strong>PX-Work</strong><span>统一网关 · 统一目录 · 统一策略 · 统一审计</span></div><div className="schematic-bottom"><span>模型算力池</span><span>数据与知识</span><span>业务系统 MCP</span></div></div>
      <div className="hero-index"><span>01 / 总体架构</span><span>02 / 权限体系</span><span>03 / 建设闭环</span></div>
    </section>

    <section className="chapter architecture" id="architecture">
      <div className="section-title"><p>01 / ARCHITECTURE</p><h2>企业 AI 统一控制平面</h2><span>所有资源归集、所有能力注册、所有请求过闸</span></div>
      <div className="architecture-map"><aside className="layer-rail" aria-hidden="true"><span>应用层</span><span>客户端层</span><span>控制层</span><span>服务层</span><span>资源层</span></aside><div className="map-body">
        <div className="map-row access-row"><div className="row-heading"><b>使用主体与接入形态</b><small>人和程序都以 Agent 身份进入</small></div><div className="access-cards"><article><b>企业员工 / 业务部门</b><span>桌面端 · 网页端</span></article><article><b>研发单位</b><span>SDK · 专项 Agent</span></article></div></div>
        <div className="auth-gate"><span>ISC 身份认证</span><i>+</i><span>PX-Work 场景 Key</span></div>
        <div className="map-row client-row"><div className="row-heading"><b>PX-Work 客户端</b><small>按组织和角色获取可用资源</small></div><div className="client-features"><span>Agent 交互</span><span>Tools 清单</span><span>知识库问答</span><span>会话与任务</span></div></div>
        <div className="map-row control-row"><div className="control-brand"><small>统一监管中枢</small><b>PX-Work 服务端</b><p>来源即 Agent · 请求必过网关</p></div><div className="control-matrix">{controls.map(([title, text]) => <article key={title}><b>{title}</b><span>{text}</span></article>)}</div><div className="tool-registry"><small>统一注册与发布</small><div>{tools.map((item) => <span key={item}>{item}</span>)}</div><b>TOOLS</b></div></div>
        <div className="map-row service-row"><article><b>模型服务网关</b><span>统一 API · SDK · 路由</span></article><article><b>指标集服务</b><span>数据中台 · ChatBI</span></article><article><b>知识库服务</b><span>企业 / 专项 / 个人共享</span></article><article><b>MCP 服务</b><span>交易平台 · 决策中枢</span></article></div>
        <div className="identity-pass">ISC 委托身份随 MCP 请求向下游传递 · 对侧系统完成最终鉴权</div>
        <div className="map-row resource-row"><div className="resource-block"><small>模型算力底座</small><div><span>自建算力</span><span>云上 ECS</span><span>省公司算力</span></div></div><div className="resource-block data"><small>企业数据底座</small><div><span>数据中台</span><span>知识中心</span><span>存量信息系统</span></div></div></div>
      </div></div>
      <div className="architecture-rule"><b>边界原则</b><span>模型算力不直接提供服务</span><i/><span>AI 不直接介入存量系统</span><i/><span>长期 Agent 未注册不得运行</span></div>
    </section>

    <section className="chapter permission" id="permission">
      <div className="section-title light"><p>02 / PERMISSION SYSTEM</p><h2>三道鉴权，一次调用</h2><span>身份、场景、业务权限相互独立，并在请求链路上逐级收敛</span></div>
      <div className="permission-layout"><div className="auth-tabs" role="tablist" aria-label="鉴权类型">{authTracks.map((item, index) => <button key={item.title} className={activeAuth === index ? "active" : ""} onClick={() => setActiveAuth(index)} role="tab" aria-selected={activeAuth === index}><span>{item.number}</span><b>{item.title}</b><small>{item.subtitle}</small></button>)}</div><div className={`auth-detail ${authTracks[activeAuth].color}`}><div className="auth-detail-head"><span>{authTracks[activeAuth].number}</span><div><small>CONTROL CHECKPOINT</small><h3>{authTracks[activeAuth].title}</h3></div></div><div className="auth-path">{authTracks[activeAuth].path.map((step, index) => <div key={step}><i>{index + 1}</i><b>{step}</b>{index < 2 && <span>→</span>}</div>)}</div><p>{authTracks[activeAuth].note}</p></div></div>
      <div className="permission-equation"><div><span>用户权限</span><small>ISC 身份 · 组织 · 角色</small></div><b>∩</b><div><span>场景权限</span><small>Key · Agent · Tool · 配额</small></div><b>∩</b><div><span>资源权限</span><small>模型 · 数据 · MCP 操作</small></div><b>=</b><div className="effective"><span>本次有效权限</span><small>最小授权 · 动态计算 · 全程留痕</small></div></div>
      <p className="kill-note"><b>紧急控制：</b>PX-Work 可在网关侧限流、阻断或终止任意 Agent 的后续运行；已发生的业务动作仍由对侧系统留痕与补偿。</p>
    </section>

    <section className="chapter delivery" id="delivery">
      <div className="section-title"><p>03 / DELIVERY LOOP</p><h2>从需求到运行，全生命周期纳管</h2><span>先设计、再审批、后接入；上线不等于脱离治理</span></div>
      <div className="lifecycle">{lifecycle.map(([number, title, text], index) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < lifecycle.length - 1 && <i>→</i>}</article>)}</div>
      <div className="boundary-grid"><div className="boundary-intro"><small>MANDATORY BOUNDARIES</small><h3>四条建设红线</h3><p>适用于业务部门、研发单位、平台团队与系统供应商。</p></div>{boundaries.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{text}</p></article>)}</div>
      <div className="final-statement"><span>PX-WORK / 统一控制平面</span><strong>让能力开放，让边界清晰，让每一个 Agent 都可信、可管、可停。</strong></div>
    </section>
  </main>;
}
