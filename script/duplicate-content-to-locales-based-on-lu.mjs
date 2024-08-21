import { buildClient } from '@datocms/cma-client-node';

const locales = [
  'en-BE',
  'nl-BE',
  'fr-BE',
  'de-BE',
  'en-DK',
  'en-EE',
  'en-FI',
  'en-FR',
  'fr-FR',
  'en-DE',
  'de-DE',
  'en-IS',
  'en-IE',
  'en-IT',
  'en-LU',
  'fr-LU',
  'de-LU',
  'en-NO',
  'en-PT',
  'en-ES',
  'en-SE',
  'en-NL',
  'nl-NL',
  'en-GB',
];

const newLocales = [
  'en-DK',
  'en-EE',
  'en-FI',
  'en-FR',
  'fr-FR',
  'en-DE',
  'de-DE',
  'en-IS',
  'en-IE',
  'en-IT',
  'en-NO',
  'en-PT',
  'en-ES',
  'en-SE',
  'en-GB',
];

async function run() {
  const client = buildClient({
    apiToken: process.env.DATOCMS_API_KEY_WRITE,
    environment: process.env.DATOCMS_ENVIRONMENT,
  });

  // We're first gonna update the locales in the locales array
  console.log('🌍 updating locales');
  await client.site.update({ locales });

  const loseModelsThatMightNeedToContentDuplicatedInOtherLocales = [
    { id: '186328', api_key: 'article_category' },
    { id: 'Z8TS4-b3RR2uFAwKtoMmfQ', api_key: 'country' },
    { id: '186321', api_key: 'partner_category' },
  ];
  const sectionModelsThatMightNeedToContentDuplicatedInOtherLocales = [
    { id: '186345', api_key: 'section_reach' },
    { id: 'QDaohGLvQd-5AutREG9fdQ', api_key: 'section_pricing_table' },
    {
      id: 'ag1AEt--TW-fRgjJcRYI0A',
      api_key: 'section_partners_with_highlight',
    },
    { id: 'U-cBPR0IRXWQqFQWHXomwA', api_key: 'section_pro_con' },
    { id: '186342', api_key: 'section_security_teaser' },
    { id: '592814', api_key: 'section_text_block' },
    { id: '186358', api_key: 'section_content' },
    { id: '186338', api_key: 'section_single_article' },
    { id: '186341', api_key: 'section_service' },
    { id: '186346', api_key: 'section_partners_teaser' },
    { id: '186336', api_key: 'section_subject' },
    { id: '1276293', api_key: 'section_recruitee' },
    { id: '186359', api_key: 'section_compliancy' },
    { id: '1201609', api_key: 'section_device_based_content' },
    { id: '592818', api_key: 'section_insight_highlight' },
    { id: '186357', api_key: 'section_conversion' },
    { id: '186353', api_key: 'section_externallink' },
    { id: '186339', api_key: 'section_simple_accordion' },
    { id: '186352', api_key: 'section_faq' },
    { id: '186356', api_key: 'section_cta' },
    { id: '186335', api_key: 'section_user_benefit' },
    { id: 'bBoKbg22StSDZFPJD4U_Ew', api_key: 'section_industry' },
    { id: '186334', api_key: 'section_usp' },
    { id: '186349', api_key: 'section_needs_get_started' },
    { id: 'GMmzJ--RSLupcVpgBjQUKg', api_key: 'section_country_list' },
    { id: '186333', api_key: 'section_video' },
    { id: '186354', api_key: 'section_download' },
    { id: '592815', api_key: 'section_animated_steps_carousel' },
    { id: 'ddN_B_wYT2ioQ7wdh35jRQ', api_key: 'section_industry_teaser' },
    { id: '186337', api_key: 'section_stepper' },
    { id: '186344', api_key: 'section_resource' },
    { id: '186348', api_key: 'section_number' },
    { id: '186350', api_key: 'section_inspiration' },
    { id: '186343', api_key: 'section_sales_block' },
    { id: 'GWFcYZiISzWLus5XI4VW5A', api_key: 'section_hubspot_form' },
    { id: '186332', api_key: 'section_video_carousel' },
    { id: '592822', api_key: 'section_insight' },
    { id: '186347', api_key: 'section_partners_overview_category' },
    { id: '186355', api_key: 'section_dataset' },
    { id: '186318', api_key: 'section_card' },
    { id: '186317', api_key: 'section_header' },
    { id: '186351', api_key: 'section_get_started' },
    { id: '1201608', api_key: 'section_whitepaper' },
    { id: 'AD3tQhP8T2KJgOw4jMTToQ', api_key: 'section_process' },
    { id: '1852724', api_key: 'section_download_form' },
    { id: '186319', api_key: 'section_animation' },
    { id: '186340', api_key: 'section_services_teaser' },
  ];
  const pageModelsThatMightNeedToContentDuplicatedInOtherLocales = [
    { id: '186324', api_key: 'page_builder_b2b' },
    { id: '186325', api_key: 'page_builder' },
    { id: '186323', api_key: 'page_get_started' },
    { id: '1990274', api_key: 'page_discovery' },
  ];

  const modelGeneral = [{ id: '186316', api_key: 'general' }];

  const modelLists = [
    loseModelsThatMightNeedToContentDuplicatedInOtherLocales,
    sectionModelsThatMightNeedToContentDuplicatedInOtherLocales,
    pageModelsThatMightNeedToContentDuplicatedInOtherLocales,
    modelGeneral,
  ];

  // We'll be building up an array of all records using an AsyncIterator, `client.items.listPagedIterator()`
  const allRecords = [];
  for (const models of modelLists) {
    const type = models.map((model) => model.id).join(',');
    for await (const record of client.items.listPagedIterator(
      {
        nested: true,
        filter: {
          type,
        },
      },
      { concurrency: 5, perPage: 30 },
    )) {
      allRecords.push(record);
    }
  }

  const recordsThatNeedToBePublished = [];
  console.log(`🥵 we're gonna run through all ${allRecords.length} records.`);
  for (const record of allRecords) {
    const recordWithUpdatedFields = populateFieldsWithLocaleValues(record);

    // if there are updateable fields for said record, update the record
    if (Object.keys(recordWithUpdatedFields).length > 0) {
      try {
        const updatedRecord = await client.items.update(record.id, recordWithUpdatedFields);
        console.log(
          `🎉 updated record ${updatedRecord.id} with item_type id ${record.item_type.id}`,
        );
        recordsThatNeedToBePublished.push(updatedRecord.id);
      } catch (error) {
        console.log(
          `💣 failed updating record ${record.id} with item_type id ${record.item_type.id}`,
        );
        console.dir(record);
        console.dir(recordWithUpdatedFields);
        throw error;
      }

      continue;
    }

    console.log(
      `🤷‍♂️ no updateable fields for record ${record.id} with item_type id ${record.item_type.id}`,
    );
  }

  console.log(
    `😪 all records have been updated succesfully we're gonna update all ${recordsThatNeedToBePublished.length} records that need to be published.`,
  );
  for (const recordId of recordsThatNeedToBePublished) {
    try {
      await client.items.publish(recordId);
      console.log(`🎉 published record ${recordId}`);
    } catch (error) {
      console.log(`💣 failed publishing record ${recordId}`);
      throw error;
    }
  }

  console.log('🥳 all records have been updated and published, time to test out the new locales.');
}

function populateFieldsWithLocaleValues(record) {
  // We're looping through all records their fields
  const recordWithUpdatedFields = {};
  for (const [key, value] of Object.entries(record)) {
    // ignore non-object values, arrays, and null values
    if (typeof value !== 'object' || Array.isArray(value) || value === null) {
      continue;
    }
    // ignore records that don't have the necessary locales
    if (!('en-LU' in value) || !('fr-LU' in value) || !('de-LU' in value)) {
      continue;
    }

    // Now lets update the fields with the necessary locales

    // Check if value is an array of blocks
    if (
      Array.isArray(value['en-LU']) &&
      value['en-LU'].length > 0 &&
      typeof value['en-LU'][0] !== 'string'
    ) {
      const enLUClonedValue = cloneBlocksArray(value['en-LU']);
      const frLUClonedValue = cloneBlocksArray(value['fr-LU']);
      const deLUClonedValue = cloneBlocksArray(value['de-LU']);
      recordWithUpdatedFields[key] = {
        ...value,
        ...fillNewLocalesWithValues(enLUClonedValue, frLUClonedValue, deLUClonedValue),
      };
      continue;
    }

    // Check if value is dast
    if (
      typeof value['en-LU'] === 'object' &&
      value['en-LU'] !== null &&
      'schema' in value['en-LU'] &&
      value['en-LU']['schema'] === 'dast'
    ) {
      const enLUClonedValue = cloneDast(value['en-LU']);
      const frLUClonedValue = cloneDast(value['fr-LU']);
      const deLUClonedValue = cloneDast(value['de-LU']);
      recordWithUpdatedFields[key] = {
        ...value,
        ...fillNewLocalesWithValues(enLUClonedValue, frLUClonedValue, deLUClonedValue),
      };
      continue;
    }

    // The value are not blocks or dast so we can just update the fields
    recordWithUpdatedFields[key] = {
      ...value,
      ...fillNewLocalesWithValues(value['en-LU'], value['fr-LU'], value['de-LU']),
    };
  }

  return recordWithUpdatedFields;
}

function cloneDast(dast) {
  const { document, ...rest } = dast;
  const { children, ...documentRest } = document;

  return {
    document: {
      ...documentRest,
      children: children.map((child) => {
        if (child.type === 'block') {
          const { item, ...rest } = child;
          return {
            ...rest,
            item: cloneBlock(item),
          };
        }
        return child;
      }),
    },
    ...rest,
  };
}

function cloneBlock(block) {
  const { id, attributes, ...rest } = block;
  for (const [key, value] of Object.entries(attributes)) {
    if (Array.isArray(value) && value.length > 0 && typeof value[0] !== 'string') {
      attributes[key] = cloneBlocksArray(value);
    }
  }
  return { attributes, ...rest };
}

function cloneBlocksArray(blocks) {
  return blocks.map(cloneBlock);
}

function fillNewLocalesWithValues(enLU, frLU, deLU) {
  return Object.fromEntries(
    newLocales.map((locale) => [
      locale,
      locale.startsWith('en') ? enLU : locale.startsWith('fr') ? frLU : deLU,
    ]),
  );
}

run();
