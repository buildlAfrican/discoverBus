const Container = styled.div`
  padding: 100px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
  background: #f4fdfa;

  @media screen and (max-width: 1730px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    padding: 60px 1rem;
    gap: 40px;
  }
`;

const SectionHeading = styled.h2`
  color: #1b1b18;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 103.5%; /* 49.68px */
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    color: #1b1b18;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 33.12px */
  }
`;

const ExploreCard = ({ title, description, icon, link }) => {
  const Title = styled.p`
    color: #1b1b18;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.5%; /* 28.92px */
    margin: 0;
  `;

  const Description = styled.p`
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    margin: 0;
  `;

  const Card = styled.a`
    border-radius: 8px;
    transition: all 300ms;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      background: #eee8dd;
      svg {
        transition: all 300ms;
        filter: invert(42%) sepia(97%) saturate(649%) hue-rotate(117deg)
          brightness(97%) contrast(98%);
      }
    }

    @media screen and (max-width: 800px) {
      width: 100% !important;
    }
  `;

  return (
    <Card
      className="d-flex w-50 p-3 gap-3"
      style={{ marginBottom: 40 }}
      key={Math.random()}
      href={link}
    >
      <div>{icon}</div>
      <div>
        <Title className="mb-3">{title}</Title>
        <Description>{description}</Description>
      </div>
    </Card>
  );
};

const cards = [
  {
    title: "BOS Native",
    link: "/projects/native-projects",
    description:
      "DiscoverbOS is the gateway of the gateways build on the BOS powered by NEAR protocol.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M30.7075 9.91464L26.7075 5.91464C26.5198 5.727 26.2653 5.62158 26 5.62158C25.7346 5.62158 25.4801 5.727 25.2925 5.91464C25.1048 6.10228 24.9994 6.35677 24.9994 6.62214C24.9994 6.8875 25.1048 7.142 25.2925 7.32964L27.5862 9.62214H24C22.7749 9.66654 21.5706 9.95242 20.4562 10.4634C18.7537 11.2496 16.6025 12.9271 16.0137 16.4634C15.3487 20.4559 12.3762 21.3659 10.8887 21.5709C10.6264 20.3602 9.92409 19.29 8.91778 18.5677C7.91146 17.8453 6.67282 17.5222 5.44188 17.661C4.21093 17.7998 3.07533 18.3906 2.25513 19.3189C1.43492 20.2472 0.988507 21.4469 1.00239 22.6856C1.01627 23.9242 1.48946 25.1136 2.33027 26.0233C3.17108 26.933 4.31963 27.4982 5.55338 27.6094C6.78712 27.7205 8.01821 27.3698 9.00808 26.625C9.99796 25.8803 10.6761 24.7946 10.9112 23.5784C11.8102 23.4759 12.6885 23.2378 13.5162 22.8721C15.2187 22.1221 17.375 20.4471 17.9862 16.7859C18.8312 11.7184 23.7925 11.6221 24 11.6221H27.5862L25.2925 13.9146C25.1048 14.1023 24.9994 14.3568 24.9994 14.6221C24.9994 14.8875 25.1048 15.142 25.2925 15.3296C25.4801 15.5173 25.7346 15.6227 26 15.6227C26.2653 15.6227 26.5198 15.5173 26.7075 15.3296L30.7075 11.3296C30.8004 11.2368 30.8742 11.1265 30.9245 11.0051C30.9749 10.8837 31.0008 10.7536 31.0008 10.6221C31.0008 10.4907 30.9749 10.3606 30.9245 10.2392C30.8742 10.1178 30.8004 10.0075 30.7075 9.91464ZM5.99997 25.6221C5.40662 25.6221 4.8266 25.4462 4.33326 25.1165C3.83991 24.7869 3.45539 24.3184 3.22833 23.7702C3.00127 23.222 2.94186 22.6188 3.05761 22.0369C3.17337 21.4549 3.45909 20.9204 3.87865 20.5008C4.2982 20.0813 4.83275 19.7955 5.4147 19.6798C5.99664 19.564 6.59984 19.6234 7.14802 19.8505C7.6962 20.0776 8.16473 20.4621 8.49438 20.9554C8.82402 21.4488 8.99997 22.0288 8.99997 22.6221C8.99997 23.4178 8.6839 24.1808 8.12129 24.7435C7.55868 25.3061 6.79562 25.6221 5.99997 25.6221Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    title: "Funding Opportunities",
    link: "/opportunities/funding",
    description:
      "Find your support within a range of funding opportunities for your project.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M16 11.6221C15.0111 11.6221 14.0444 11.9153 13.2221 12.4647C12.3999 13.0141 11.759 13.795 11.3806 14.7087C11.0022 15.6223 10.9031 16.6276 11.0961 17.5975C11.289 18.5674 11.7652 19.4583 12.4645 20.1576C13.1637 20.8569 14.0546 21.3331 15.0245 21.526C15.9945 21.7189 16.9998 21.6199 17.9134 21.2415C18.827 20.863 19.6079 20.2222 20.1573 19.3999C20.7068 18.5777 21 17.611 21 16.6221C21 15.296 20.4732 14.0242 19.5355 13.0865C18.5979 12.1489 17.3261 11.6221 16 11.6221ZM16 19.6221C15.4067 19.6221 14.8266 19.4461 14.3333 19.1165C13.8399 18.7868 13.4554 18.3183 13.2284 17.7701C13.0013 17.2219 12.9419 16.6187 13.0576 16.0368C13.1734 15.4549 13.4591 14.9203 13.8787 14.5007C14.2982 14.0812 14.8328 13.7955 15.4147 13.6797C15.9967 13.564 16.5999 13.6234 17.1481 13.8504C17.6962 14.0775 18.1648 14.462 18.4944 14.9554C18.8241 15.4487 19 16.0287 19 16.6221C19 17.4177 18.6839 18.1808 18.1213 18.7434C17.5587 19.306 16.7956 19.6221 16 19.6221ZM30 7.62207H2C1.73478 7.62207 1.48043 7.72743 1.29289 7.91496C1.10536 8.1025 1 8.35685 1 8.62207V24.6221C1 24.8873 1.10536 25.1416 1.29289 25.3292C1.48043 25.5167 1.73478 25.6221 2 25.6221H30C30.2652 25.6221 30.5196 25.5167 30.7071 25.3292C30.8946 25.1416 31 24.8873 31 24.6221V8.62207C31 8.35685 30.8946 8.1025 30.7071 7.91496C30.5196 7.72743 30.2652 7.62207 30 7.62207ZM24.2062 23.6221H7.79375C7.45801 22.4866 6.84351 21.4531 6.00623 20.6158C5.16895 19.7786 4.1355 19.1641 3 18.8283V14.4158C4.1355 14.0801 5.16895 13.4656 6.00623 12.6283C6.84351 11.791 7.45801 10.7576 7.79375 9.62207H24.2062C24.542 10.7576 25.1565 11.791 25.9938 12.6283C26.8311 13.4656 27.8645 14.0801 29 14.4158V18.8283C27.8645 19.1641 26.8311 19.7786 25.9938 20.6158C25.1565 21.4531 24.542 22.4866 24.2062 23.6221ZM29 12.2933C27.8005 11.7776 26.8445 10.8215 26.3288 9.62207H29V12.2933ZM5.67125 9.62207C5.15549 10.8215 4.19945 11.7776 3 12.2933V9.62207H5.67125ZM3 20.9508C4.19945 21.4666 5.15549 22.4226 5.67125 23.6221H3V20.9508ZM26.3288 23.6221C26.8445 22.4226 27.8005 21.4666 29 20.9508V23.6221H26.3288Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    title: "Tutorials",
    link: "/education/tutorials",
    description:
      "Get the lowdown with our simple user-friendly how-to tutorials for users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M10.1864 5.80859L10.1864 5.80857C10.4022 5.5928 10.6948 5.47158 10.9999 5.47158C11.3051 5.47158 11.5977 5.5928 11.8135 5.80857C12.0293 6.02434 12.1505 6.31699 12.1505 6.62214C12.1505 6.92728 12.0293 7.21993 11.8135 7.4357L7.81357 11.4356L7.81351 11.4357L7.70745 11.3296C7.61457 11.4226 7.50428 11.4964 7.38289 11.5467C7.26149 11.597 7.13136 11.6229 6.99995 11.6229C6.86853 11.6229 6.7384 11.597 6.61701 11.5467C6.49561 11.4964 6.38532 11.4226 6.29245 11.3296L10.1864 5.80859ZM10.1864 5.80859L6.99998 8.99618L5.81356 7.80862L5.81351 7.80857C5.59774 7.5928 5.30509 7.47158 4.99995 7.47158C4.6948 7.47158 4.40215 7.5928 4.18638 7.80857C3.97061 8.02434 3.84939 8.31699 3.84939 8.62214C3.84939 8.92728 3.97061 9.21993 4.18638 9.4357L6.18632 11.4356L10.1864 5.80859ZM10.1864 13.8086L10.1864 13.8086C10.4022 13.5928 10.6948 13.4716 10.9999 13.4716C11.3051 13.4716 11.5977 13.5928 11.8135 13.8086C12.0293 14.0243 12.1505 14.317 12.1505 14.6221C12.1505 14.9273 12.0293 15.2199 11.8135 15.4357L7.81357 19.4356L7.81351 19.4357L7.70745 19.3296C7.61457 19.4226 7.50428 19.4964 7.38289 19.5467C7.26149 19.597 7.13136 19.6229 6.99995 19.6229C6.86853 19.6229 6.7384 19.597 6.61701 19.5467C6.49561 19.4964 6.38532 19.4226 6.29245 19.3296L10.1864 13.8086ZM10.1864 13.8086L6.99998 16.9962L5.81356 15.8086L5.81351 15.8086C5.59774 15.5928 5.30509 15.4716 4.99995 15.4716C4.6948 15.4716 4.40215 15.5928 4.18638 15.8086C3.97061 16.0243 3.84939 16.317 3.84939 16.6221C3.84939 16.7732 3.87915 16.9228 3.93697 17.0624C3.99479 17.202 4.07954 17.3289 4.18638 17.4357L6.18632 19.4356L10.1864 13.8086ZM10.1864 21.8086L10.1864 21.8086L6.99998 24.9962L5.81356 23.8086L5.81351 23.8086C5.70667 23.7017 5.57984 23.617 5.44025 23.5592C5.30065 23.5013 5.15104 23.4716 4.99995 23.4716C4.84885 23.4716 4.69924 23.5013 4.55965 23.5592C4.42006 23.617 4.29322 23.7017 4.18638 23.8086C4.07954 23.9154 3.99479 24.0422 3.93697 24.1818C3.87915 24.3214 3.84939 24.471 3.84939 24.6221C3.84939 24.7732 3.87915 24.9228 3.93697 25.0624C3.99479 25.202 4.07954 25.3289 4.18638 25.4357L6.18632 27.4356C6.18634 27.4357 6.18636 27.4357 6.18638 27.4357C6.29317 27.5426 6.41998 27.6274 6.55957 27.6853C6.69917 27.7431 6.84882 27.7729 6.99995 27.7729C7.15107 27.7729 7.30072 27.7431 7.44033 27.6853C7.57991 27.6274 7.70672 27.5426 7.81351 27.4357C7.81353 27.4357 7.81355 27.4357 7.81357 27.4356L11.8135 23.4357C12.0293 23.2199 12.1505 22.9273 12.1505 22.6221C12.1505 22.317 12.0293 22.0243 11.8135 21.8086C11.5977 21.5928 11.3051 21.4716 10.9999 21.4716C10.6948 21.4716 10.4022 21.5928 10.1864 21.8086ZM27.8131 17.4353C28.0288 17.2196 28.1499 16.9271 28.1499 16.6221C28.1499 16.3171 28.0288 16.0246 27.8131 15.809C27.5975 15.5933 27.3049 15.4721 26.9999 15.4721H15.9999C15.6949 15.4721 15.4024 15.5933 15.1868 15.809C14.9711 16.0246 14.8499 16.3171 14.8499 16.6221C14.8499 16.9271 14.9711 17.2196 15.1868 17.4353C15.4024 17.651 15.6949 17.7721 15.9999 17.7721H26.9999C27.3049 17.7721 27.5975 17.651 27.8131 17.4353ZM15.9999 9.77214H26.9999C27.3049 9.77214 27.5975 9.65098 27.8131 9.43531C28.0288 9.21964 28.1499 8.92714 28.1499 8.62214C28.1499 8.31714 28.0288 8.02463 27.8131 7.80897C27.5975 7.5933 27.3049 7.47214 26.9999 7.47214H15.9999C15.6949 7.47214 15.4024 7.5933 15.1868 7.80897C14.9711 8.02463 14.8499 8.31714 14.8499 8.62214C14.8499 8.92714 14.9711 9.21964 15.1868 9.43531C15.4024 9.65098 15.6949 9.77214 15.9999 9.77214ZM26.9999 23.4721H15.9999C15.6949 23.4721 15.4024 23.5933 15.1868 23.809C14.9711 24.0246 14.8499 24.3171 14.8499 24.6221C14.8499 24.9271 14.9711 25.2196 15.1868 25.4353C15.4024 25.651 15.6949 25.7721 15.9999 25.7721H26.9999C27.3049 25.7721 27.5975 25.651 27.8131 25.4353C28.0288 25.2196 28.1499 24.9271 28.1499 24.6221C28.1499 24.3171 28.0288 24.0246 27.8131 23.809C27.5975 23.5933 27.3049 23.4721 26.9999 23.4721Z"
          fill="black"
          stroke="black"
          strokeWidth="0.3"
        />
      </svg>
    ),
  },
  {
    title: "Code Reviews",
    link: "/education/code-reviews",
    description: "Grow your skills by learning from our revised codes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M8.96005 12.7746L4.34255 16.6221L8.96005 20.4696C9.11318 20.5951 9.23996 20.7497 9.33307 20.9245C9.42617 21.0992 9.48376 21.2906 9.50251 21.4877C9.52127 21.6848 9.50082 21.8837 9.44234 22.0729C9.38386 22.262 9.28852 22.4377 9.1618 22.5899C9.03508 22.742 8.8795 22.8675 8.70402 22.9592C8.52855 23.0509 8.33666 23.107 8.13941 23.1242C7.94217 23.1413 7.74347 23.1193 7.55479 23.0593C7.3661 22.9993 7.19116 22.9026 7.04005 22.7746L1.04005 17.7746C0.871061 17.6339 0.735099 17.4577 0.641794 17.2585C0.548488 17.0593 0.500122 16.8421 0.500122 16.6221C0.500122 16.4022 0.548488 16.185 0.641794 15.9858C0.735099 15.7866 0.871061 15.6104 1.04005 15.4696L7.04005 10.4696C7.34614 10.2188 7.73896 10.0991 8.13293 10.1366C8.5269 10.1741 8.89009 10.3657 9.14337 10.6698C9.39666 10.9739 9.51952 11.3657 9.48518 11.76C9.45084 12.1542 9.26209 12.5189 8.96005 12.7746ZM30.9601 15.4696L24.9601 10.4696C24.8089 10.3417 24.634 10.245 24.4453 10.185C24.2566 10.125 24.0579 10.103 23.8607 10.1201C23.6634 10.1373 23.4715 10.1934 23.2961 10.2851C23.1206 10.3768 22.965 10.5023 22.8383 10.6544C22.7116 10.8066 22.6162 10.9823 22.5578 11.1714C22.4993 11.3606 22.4788 11.5595 22.4976 11.7566C22.5163 11.9537 22.5739 12.1451 22.667 12.3198C22.7601 12.4946 22.8869 12.6492 23.0401 12.7746L27.6576 16.6221L23.0401 20.4696C22.8869 20.5951 22.7601 20.7497 22.667 20.9245C22.5739 21.0992 22.5163 21.2906 22.4976 21.4877C22.4788 21.6848 22.4993 21.8837 22.5578 22.0729C22.6162 22.262 22.7116 22.4377 22.8383 22.5899C22.965 22.742 23.1206 22.8675 23.2961 22.9592C23.4715 23.0509 23.6634 23.107 23.8607 23.1242C24.0579 23.1413 24.2566 23.1193 24.4453 23.0593C24.634 22.9993 24.8089 22.9026 24.9601 22.7746L30.9601 17.7746C31.129 17.6339 31.265 17.4577 31.3583 17.2585C31.4516 17.0593 31.5 16.8421 31.5 16.6221C31.5 16.4022 31.4516 16.185 31.3583 15.9858C31.265 15.7866 31.129 15.6104 30.9601 15.4696ZM20.5126 4.21215C20.3274 4.14481 20.1308 4.11461 19.9339 4.12328C19.7371 4.13194 19.5439 4.1793 19.3654 4.26264C19.1868 4.34599 19.0265 4.46369 18.8935 4.60902C18.7604 4.75435 18.6573 4.92447 18.59 5.10965L10.59 27.1096C10.4544 27.4834 10.4728 27.8958 10.6411 28.2561C10.8094 28.6163 11.1139 28.895 11.4875 29.0309C11.6516 29.0915 11.8252 29.1224 12 29.1221C12.308 29.1222 12.6085 29.0275 12.8608 28.8508C13.1131 28.6741 13.3048 28.4241 13.41 28.1346L21.41 6.13465C21.4774 5.94949 21.5076 5.75287 21.4989 5.55604C21.4903 5.35921 21.4429 5.16601 21.3596 4.98748C21.2762 4.80895 21.1585 4.64859 21.0132 4.51555C20.8679 4.38252 20.6977 4.27942 20.5126 4.21215Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    title: "Regional Communities",
    link: "/communities/regional",
    description:
      "Explore the diversity of BOS ecosystems and grow your network from everywhere you want",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M16 8.12207C14.9122 8.12207 13.8488 8.44464 12.9444 9.04899C12.0399 9.65334 11.3349 10.5123 10.9187 11.5173C10.5024 12.5223 10.3935 13.6282 10.6057 14.6951C10.8179 15.762 11.3417 16.742 12.1109 17.5112C12.8801 18.2803 13.8601 18.8042 14.927 19.0164C15.9939 19.2286 17.0998 19.1197 18.1048 18.7034C19.1098 18.2871 19.9687 17.5822 20.5731 16.6777C21.1774 15.7732 21.5 14.7099 21.5 13.6221C21.4983 12.1639 20.9184 10.7659 19.8873 9.73481C18.8562 8.70372 17.4582 8.12372 16 8.12207ZM16 16.1221C15.5055 16.1221 15.0222 15.9754 14.6111 15.7007C14.2 15.426 13.8795 15.0356 13.6903 14.5788C13.5011 14.122 13.4516 13.6193 13.548 13.1343C13.6445 12.6494 13.8826 12.2039 14.2322 11.8543C14.5819 11.5047 15.0273 11.2666 15.5123 11.1701C15.9972 11.0736 16.4999 11.1232 16.9567 11.3124C17.4135 11.5016 17.804 11.822 18.0787 12.2331C18.3534 12.6443 18.5 13.1276 18.5 13.6221C18.5 14.2851 18.2366 14.921 17.7678 15.3898C17.2989 15.8587 16.663 16.1221 16 16.1221ZM16 2.12207C12.951 2.12538 10.0279 3.33805 7.87193 5.494C5.71597 7.64995 4.50331 10.5731 4.5 13.6221C4.5 23.2921 14.705 30.5471 15.14 30.8508C15.3921 31.0272 15.6923 31.1218 16 31.1218C16.3077 31.1218 16.6079 31.0272 16.86 30.8508C18.7928 29.4264 20.5612 27.7913 22.1325 25.9758C25.6437 21.9433 27.5 17.6683 27.5 13.6221C27.4967 10.5731 26.284 7.64995 24.1281 5.494C21.9721 3.33805 19.049 2.12538 16 2.12207ZM19.9125 23.9608C18.7207 25.3298 17.4115 26.5921 16 27.7333C14.5885 26.5921 13.2793 25.3298 12.0875 23.9608C10 21.5433 7.5 17.7858 7.5 13.6221C7.5 11.3677 8.39553 9.20572 9.98959 7.61166C11.5837 6.0176 13.7457 5.12207 16 5.12207C18.2543 5.12207 20.4163 6.0176 22.0104 7.61166C23.6045 9.20572 24.5 11.3677 24.5 13.6221C24.5 17.7858 22 21.5433 19.9125 23.9608Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    title: "Accelerator Program",
    link: "/opportunities/accelerator",
    description:
      "Maximize your resources and leverage the mentorship at your disposal to establish your strong foundation on the OpenWeb.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <g clipPath="url(#clip0_357_1562)">
          <path
            d="M31.555 15.7896L25.555 11.7896C25.4044 11.6891 25.2293 11.6314 25.0484 11.6226C24.8675 11.6138 24.6877 11.6544 24.528 11.7398C24.3684 11.8253 24.2349 11.9525 24.1419 12.1079C24.0489 12.2633 23.9999 12.441 24 12.6221V15.6221H9V9.62208H13.125C13.3684 10.5647 13.9472 11.3863 14.753 11.9327C15.5588 12.4791 16.5362 12.7129 17.502 12.5902C18.4678 12.4675 19.3557 11.9968 19.9993 11.2663C20.6429 10.5358 20.998 9.59565 20.998 8.62208C20.998 7.64851 20.6429 6.70835 19.9993 5.97785C19.3557 5.24734 18.4678 4.77664 17.502 4.65396C16.5362 4.53129 15.5588 4.76507 14.753 5.31148C13.9472 5.85789 13.3684 6.67942 13.125 7.62208H9C8.46957 7.62208 7.96086 7.83279 7.58579 8.20787C7.21071 8.58294 7 9.09165 7 9.62208V15.6221H1C0.734784 15.6221 0.48043 15.7274 0.292893 15.915C0.105357 16.1025 0 16.3569 0 16.6221C0 16.8873 0.105357 17.1417 0.292893 17.3292C0.48043 17.5167 0.734784 17.6221 1 17.6221H7V23.6221C7 24.1525 7.21071 24.6612 7.58579 25.0363C7.96086 25.4114 8.46957 25.6221 9 25.6221H13V26.6221C13 27.1525 13.2107 27.6612 13.5858 28.0363C13.9609 28.4114 14.4696 28.6221 15 28.6221H19C19.5304 28.6221 20.0391 28.4114 20.4142 28.0363C20.7893 27.6612 21 27.1525 21 26.6221V22.6221C21 22.0916 20.7893 21.5829 20.4142 21.2079C20.0391 20.8328 19.5304 20.6221 19 20.6221H15C14.4696 20.6221 13.9609 20.8328 13.5858 21.2079C13.2107 21.5829 13 22.0916 13 22.6221V23.6221H9V17.6221H24V20.6221C23.9999 20.8032 24.0489 20.9809 24.1419 21.1363C24.2349 21.2917 24.3684 21.4189 24.528 21.5043C24.6877 21.5898 24.8675 21.6303 25.0484 21.6216C25.2293 21.6128 25.4044 21.5551 25.555 21.4546L31.555 17.4546C31.6922 17.3633 31.8047 17.2395 31.8825 17.0943C31.9603 16.9491 32.001 16.7868 32.001 16.6221C32.001 16.4573 31.9603 16.2951 31.8825 16.1499C31.8047 16.0046 31.6922 15.8809 31.555 15.7896ZM17 6.62208C17.3956 6.62208 17.7822 6.73938 18.1111 6.95914C18.44 7.1789 18.6964 7.49126 18.8478 7.85671C18.9991 8.22217 19.0387 8.6243 18.9616 9.01226C18.8844 9.40022 18.6939 9.75659 18.4142 10.0363C18.1345 10.316 17.7781 10.5065 17.3902 10.5837C17.0022 10.6608 16.6001 10.6212 16.2346 10.4698C15.8692 10.3185 15.5568 10.0621 15.3371 9.73322C15.1173 9.40432 15 9.01764 15 8.62208C15 8.09165 15.2107 7.58294 15.5858 7.20787C15.9609 6.83279 16.4696 6.62208 17 6.62208ZM15 22.6221H19V26.6221H15V22.6221ZM26 18.7533V14.4971L29.1975 16.6221L26 18.7533Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_357_1562">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0 0.62207)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const ResponsiveSection = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

return (
  <Container>
    <div>
      <SectionHeading>Explore Even More</SectionHeading>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        {cards.map((card) => (
          <ExploreCard
            title={card.title}
            description={card.description}
            icon={card.icon}
            link={card.link}
            key={`Opportunity-${Math.random()}`}
            id={`Opportunity-Card-${Math.random()}`}
          />
        ))}
      </div>
    </div>
  </Container>
);