<script>
  import Input from "@/components/Input.svelte";

  const cardInputs = [
    "firstName",
    "middleName",
    "lastName",
    "uid",
    "organization",
    "workPhone",
    "birthday",
    "title",
    "url",
    "workUrl",
    "note",
    "nickname",
    "namePrefix",
    "nameSuffix",
    "gender",
    "anniversary",
    "role",
    "homePhone",
    "cellPhone",
    "pagerPhone",
    "email",
    "workEmail",
    "homeAddress_label",
    "homeAddress_street",
    "homeAddress_city",
    "homeAddress_stateProvince",
    "homeAddress_postalCode",
    "homeAddress_countryRegion",
    "workAddress_label",
    "workAddress_street",
    "workAddress_city",
    "workAddress_stateProvince",
    "workAddress_postalCode",
    "workAddress_countryRegion",
    "socialUrls",
  ];
</script>

<form class="w-full flex flex-col">
  {#each cardInputs as input}
    <Input placeholder={input} />
  {/each}
</form>
