const ownerId = "discover.near";

if (!context.accountId) {
  return (
    <Widget
      src={`${ownerId}/widget/InfoSegment`}
      props={{
        title: "Not logged in!",
        description: "You must log in to create a new project!",
      }}
    />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3em;
  padding-bottom: 3em;
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 1.4em;
  text-align: center;
  color: #000000;
`;

const SubHeader = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 0.95em;
  line-height: 1.25em;
  text-align: center;
  color: #101828;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  gap: 1em;
`;

const FormHeader = styled.h3`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0.5em;
  border-bottom: 1px solid #eceef0;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125em;
  line-height: 1.25em;
  color: #000000;
  width: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

State.init({
  name: "",
  nameError: "",
  accountId: "",
  accountIdError: "",
  verticals: [],
  verticalsError: "",
  productType: [],
  productTypeError: "",
  integration: null,
  integrationError: "",
  dev: null,
  devError: "",
  tagline: "",
  taglineError: "",
  description: "",
  descriptionError: "",
  tags: [],
  tagsError: "",
  website: "",
  websiteError: "",
  geo: "",
  geoError: "",
  team: null,
  teamError: "",
  accountsWithPermissions: [],
  accountsWithPermissionsIsFetched: false,
  oss: null,
  ossError: "",
});

if (!state.accountsWithPermissionsIsFetched) {
  Near.asyncView(
    "social.near",
    "debug_get_permissions",
    { account_id: context.accountId },
    "final",
    false
  ).then((data) =>
    State.update({
      accountsWithPermissions: data
        .map(([info]) => info)
        .filter((info) => "AccountId" in info)
        .map(({ AccountId }) => AccountId),
      accountsWithPermissionsIsFetched: true,
    })
  );
}

const slideDown = styled.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

const slideUp = styled.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

const Hidable = styled("Collapsible.Content")`
  overflow: hidden;

  &[data-state="open"] {
    animation: ${slideDown} 0.3s ease-in-out;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 0.3s ease-in-out;
  }
`;

const validateForm = () => {
  return (
    state.name &&
    state.nameError === "" &&
    state.accountId &&
    state.accountIdError === "" &&
    state.verticals &&
    state.verticalsError === "" &&
    state.productType &&
    state.productTypeError === "" &&
    state.integration &&
    state.integrationError === "" &&
    state.dev &&
    state.devError === "" &&
    (!state.tagline || state.taglineError === "") &&
    (!state.description || state.descriptionError === "") &&
    (!state.tags || state.tagsError === "") &&
    (!state.website || state.websiteError === "") &&
    (!state.geo || state.geoError === "") &&
    (!state.team || state.teamError === "") &&
    (!state.oss || state.ossError === "")
  );
};

return (
  <Container>
    <div>
      <Header>Create new project</Header>
    </div>
    <Form>
      <FormHeader>General</FormHeader>
      <Widget
        src={`${ownerId}/widget/InputsText`}
        props={{
          label: "Project name *",
          placeholder: "Enter project name",
          value: state.name,
          onChange: (name) => State.update({ name }),
          validate: () => {
            if (state.name.length < 3) {
              State.update({ nameError: "Name must be at least 3 characters" });
              return;
            }

            if (state.name.length > 100) {
              State.update({
                nameError: "Name must be less than 100 characters",
              });
              return;
            }

            State.update({ nameError: "" });
          },
          error: state.nameError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsAccountId`}
        props={{
          label: "Your project's NEAR Account *",
          placeholder:
            "Enter the NEAR account ID of your project (wallet address like discover.near)",
          value: state.accountId,
          onChange: (accountId) => State.update({ accountId }),
          addInfo: (addInfo) => State.update({ addInfo }),
        }}
      />
      {state.addInfo && state.accountId !== context.accountId ? (
        <Widget
          src={`${ownerId}/widget/InfoSegment`}
          props={{
            title: "Account ID of project",
            description: (
              <>
                Your project has its own account. In order to add admins on a
                project, including yourself, you must log in with the project
                account id, and visit the{" "}
                <a
                  target="_blank"
                  href={`/${ownerId}/widget/Index?tab=permissions&accountIds=${context.accountId}`}
                >
                  link
                </a>{" "}
                to grant appropriate permissions to yourself and your team. Once
                completed, log back in with your user account (the account you
                are using now) to complete the set up process.
              </>
            ),
          }}
        />
      ) : (
        <></>
      )}
      <Widget
        src={`${ownerId}/widget/InputsVerticals`}
        props={{
          verticals: state.verticals,
          update: (verticals) => State.update({ verticals }),
          setError: (verticalsError) => State.update({ verticalsError }),
          error: state.verticalsError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsProductType`}
        props={{
          productType: state.productType,
          update: (productType) => State.update({ productType }),
          setError: (productTypeError) => State.update({ productTypeError }),
          error: state.productTypeError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsIntegration`}
        props={{
          category: state.integration,
          update: (integration) => State.update({ integration }),
          setError: (integrationError) => State.update({ integrationError }),
          error: state.integrationError,
        }}
      />
      <Collapsible.Root
        open={state.integration.value === "multichain"}
        style={{ width: "100%" }}
      >
        <Hidable>
          <Widget
            src={`${ownerId}/widget/InputsMultiSelect`}
            props={{
              label: "Other chains",
              placeholder:
                "What other chain(s) are you currently integrating with?",
              value: state.chains,
              onChange: (chains) =>
                State.update({
                  chains: chains.map(({ name }) => ({
                    name: name.trim().replaceAll(/\s+/g, "-"),
                  })),
                }),
            }}
          />
        </Hidable>
      </Collapsible.Root>
      <Widget
        src={`${ownerId}/widget/InputsPhase`}
        props={{
          dev: state.dev,
          update: (dev) => State.update({ dev }),
          setError: (devError) => State.update({ devError }),
          error: state.devError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsText`}
        props={{
          label: "Tagline",
          placeholder: "Write a one liner about your project",
          value: state.tagline,
          onChange: (tagline) => State.update({ tagline }),
          validate: () => {
            if (state.tagline.length > 50) {
              State.update({
                taglineError: "Tagline must be less than 50 characters",
              });
              return;
            }

            State.update({ taglineError: "" });
          },
          error: state.taglineError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsTextArea`}
        props={{
          label: "Description",
          placeholder: "Give a short description of your project",
          value: state.description,
          onChange: (description) => State.update({ description }),
          validate: () => {
            if (state.description.length > 500) {
              State.update({
                descriptionError:
                  "Description must be less than 500 characters",
              });
              return;
            }

            State.update({ descriptionError: "" });
          },
          error: state.descriptionError,
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsDistribution`}
        props={{
          distribution: state.distribution,
          update: (distribution) => State.update({ distribution }),
          setError: (distributionError) => State.update({ distributionError }),
          error: state.distributionError,
        }}
      />
      {/*<Widget
        src={`${ownerId}/widget/InputsMultiSelect`}
        props={{
          label: "Tags",
          placeholder: "Add tags",
          options: [{ name: "wallets" }, { name: "games" }],
          value: state.tags,
          onChange: (tags) =>
            State.update({
              tags: tags.map(({ name }) => ({
                name: name.trim().replaceAll(/\s+/g, "-"),
              })),
            }),
        }}
      />*/}
      <Widget
        src={`${ownerId}/widget/InputsText`}
        props={{
          label: "Website",
          placeholder: "Website URL (near.org)",
          value: state.website,
          onChange: (website) => State.update({ website }),
          validate: () => {
            if (state.website.length > 50) {
              State.update({
                websiteError: "The URL must be less than 50 characters",
              });
              return;
            }

            State.update({ websiteError: "" });
          },
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsNumber`}
        props={{
          label: "Team size",
          placeholder: 10,
          value: state.team,
          onChange: (team) => State.update({ team }),
          validate: () => {
            if (state.team < 1) {
              State.update({ teamError: "Team size must be at least 1" });
              return;
            }

            State.update({ teamError: "" });
          },
        }}
      />
      <Widget
        src={`${ownerId}/widget/InputsText`}
        props={{
          label: "Location",
          placeholder: "San Fancisco, CA",
          value: state.geo,
          onChange: (geo) => State.update({ geo }),
          validate: () => {
            if (state.geo.length > 100) {
              State.update({
                geoError: "Location must be less than 100 characters",
              });
              return;
            }

            State.update({ geoError: "" });
          },
        }}
      />
      <FormFooter>
        <Widget
          src={`${ownerId}/widget/ButtonsGreen`}
          props={{
            disabled: !validateForm(),
            onClick: () => {
              if (!validateForm()) return;
              const data = {
                [state.accountId]: {
                  profile: {
                    name: state.name,
                    verticals: state.verticals.reduce(
                      (acc, name) => Object.assign(acc, { [name]: "" }),
                      {}
                    ),
                    product_type: state.productType.reduce(
                      (acc, name) => Object.assign(acc, { [name]: "" }),
                      {}
                    ),
                    dev: state.dev.value,
                    ...(state.team ? { team: `${state.team}` } : {}),
                    ...(state.tagline ? { tagline: state.tagline } : {}),
                    ...(state.description
                      ? { description: state.description }
                      : {}),
                    ...(state.tags.length
                      ? {
                          tags: state.tags.reduce(
                            (acc, { name }) =>
                              Object.assign(acc, { [name]: "" }),
                            {}
                          ),
                        }
                      : {}),
                    ...(state.website || state.socials
                      ? {
                          ...state.socials,
                          ...(state.website
                            ? {
                                website: state.website.startsWith("http://")
                                  ? state.website.substring(7)
                                  : state.website.startsWith("https://")
                                  ? state.website.substring(8)
                                  : state.website,
                              }
                            : {}),
                        }
                      : {}),
                  },
                },
              };
              const deposit = Big(JSON.stringify(data).length * 16).mul(
                Big(10).pow(20)
              );
              const transactions = [
                {
                  contractName: "social.near",
                  methodName: "set",
                  deposit,
                  args: { data },
                },
                {
                  contractName: ownerId,
                  methodName: "add_project",
                  args: { account_id: state.accountId },
                },
                {
                  contractName: ownerId,
                  methodName: "edit_project",
                  args: {
                    account_id: state.accountId,
                    project: {
                      integration: state.integration.value,
                      ...(state.geo ? { geo: state.geo } : {}),
                    },
                  },
                },
              ];
              Near.call(transactions);
            },
            text: (
              <>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.875 16.5V12.75M2.875 5.25V1.5M1 3.375H4.75M1 14.625H4.75M9.25 2.25L7.94937 5.63165C7.73786 6.18157 7.6321 6.45653 7.46765 6.68781C7.32189 6.8928 7.1428 7.07189 6.93781 7.21765C6.70653 7.3821 6.43157 7.48786 5.88165 7.69937L2.5 9L5.88165 10.3006C6.43157 10.5121 6.70653 10.6179 6.93781 10.7824C7.1428 10.9281 7.32189 11.1072 7.46765 11.3122C7.6321 11.5435 7.73786 11.8184 7.94937 12.3684L9.25 15.75L10.5506 12.3684C10.7621 11.8184 10.8679 11.5435 11.0324 11.3122C11.1781 11.1072 11.3572 10.9281 11.5622 10.7824C11.7935 10.6179 12.0684 10.5121 12.6184 10.3006L16 9L12.6184 7.69937C12.0684 7.48786 11.7935 7.3821 11.5622 7.21765C11.3572 7.07189 11.1781 6.8928 11.0324 6.68781C10.8679 6.45653 10.7621 6.18157 10.5506 5.63165L9.25 2.25Z"
                    stroke="#11181C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Create project
              </>
            ),
          }}
        />
      </FormFooter>
    </Form>
  </Container>
);
