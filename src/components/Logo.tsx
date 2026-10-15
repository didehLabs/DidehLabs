const Logo = () => {
  return (
    <a href="#hero" className="site-logo" aria-label="didehLabs home">
      <span className="site-logo__mark" style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px" }}>
        <img 
          src="/favicon/logo.png" 
          alt="didehLabs Icon" 
          style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} 
        />
      </span>
      <span className="site-logo__name">
        dideh<span>Labs</span>
      </span>
      <span className="site-logo__dot" aria-hidden="true" />
    </a>
  );
};

export default Logo;
