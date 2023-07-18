export default {
	id: 'operation-bulk-sendgrid',
	name: 'Sendgrid Bulk Email',
	icon: 'mail',
	description: 'Send bulk emails using Sendgrid API.',
	overview: ({ subject, from }) => [
		{
			label: 'Subject',
			text: subject,
		},
		{
			label: 'From',
			text: from,
		},
	],
	options: [
		{
			field: 'from',
			name: 'From Address',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'recipients',
			name: 'Recipients Object',
			type: 'json',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'email_key',
			name: 'Recipent Email Key',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'subject',
			name: 'Subject',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'template_data',
			name: 'Dynamic Template Data',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'list',
				options:  {
					template: '{{var}}: {{key}}',
					fields:  [
						{
							field: 'var',
							name: 'Email Variable',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'input',
								options: {
									font: 'monospace',
								},
							},
						},
						{
							field: 'key',
							name: 'Recipient Object Key',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'input',
								options: {
									font: 'monospace',
								},
							},
						},
					],
				},
			},
		},
		{
			field: 'template_id',
			name: 'SendGrid Template ID',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],	
};
