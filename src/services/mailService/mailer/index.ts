/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import DKIM from 'nodemailer/lib/dkim';
import { Readable } from 'stream';
import nodemailer from 'nodemailer';
import {
	Address,
	Attachment,
	AttachmentLike,
	Headers,
	IcalAttachment,
	ListHeaders,
	TextEncoding
} from 'nodemailer/lib/mailer';
import { mailConfig } from '@exam-cell-config';


interface IMailer {
	host: string;
	port: number;
	proxy: string;
	secure: boolean;
	username: string;
	password: string;
}

interface ISendMailOptions {
	/** The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>' */
	from?: string | Address | undefined;
	/** An e-mail address that will appear on the Sender: field */
	sender?: string | Address | undefined;
	/** Comma separated list or an array of recipients e-mail addresses that will appear on the To: field */
	to?: string | Address | Array<string | Address> | undefined;
	/** Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field */
	cc?: string | Address | Array<string | Address> | undefined;
	/** Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field */
	bcc?: string | Address | Array<string | Address> | undefined;
	/** An e-mail address that will appear on the Reply-To: field */
	replyTo?: string | Address | undefined;
	/** The message-id this message is replying */
	inReplyTo?: string | Address | undefined;
	/** Message-id list (an array or space separated string) */
	references?: string | string[] | undefined;
	/** The subject of the e-mail */
	subject?: string | undefined;
	/** The plaintext version of the message */
	text?: any;
	/** The HTML version of the message */
	html?: any;
	/** AMP4EMAIL specific HTML version of the message, same usage as with text and html. Make sure it is a full and valid AMP4EMAIL document, otherwise the displaying email client falls back to html and ignores the amp part */
	amp?: string | Buffer | Readable | undefined;
	/** iCalendar event, same usage as with text and html.
	 * Event method attribute defaults to ‘PUBLISH’ or define it yourself: {method: 'REQUEST', content: iCalString}. This value is added as an additional alternative to html or text. Only utf-8 content is allowed
	 * */
	icalEvent?: string | Buffer | Readable | IcalAttachment | undefined;
	/** An object or array of additional header fields */
	headers?: Headers | undefined;
	/** An object where key names are converted into list headers. List key help becomes List-Help header etc. */
	list?: ListHeaders | undefined;
	/** An array of attachment objects */
	attachments?: Attachment[] | undefined;
	/** An array of alternative text contents (in addition to text and html parts) */
	alternatives?: Attachment[] | undefined;
	/** optional Message-Id value, random value will be generated if not set */
	messageId?: string | undefined;
	/** optional Date value, current UTC string will be used if not set */
	date?: Date | string | undefined;
	/** optional transfer encoding for the textual parts */
	encoding?: string | undefined;
	/** if set then overwrites entire message output with this value. The value is not parsed, so you should still set address headers or the envelope value for the message to work */
	raw?: string | Buffer | Readable | AttachmentLike | undefined;
	/** set explicitly which encoding to use for text parts (quoted-printable or base64). If not set then encoding is detected from text content (mostly ascii means quoted-printable, otherwise base64) */
	textEncoding?: TextEncoding | undefined;
	/** if set to true then fails with an error when a node tries to load content from URL */
	disableUrlAccess?: boolean | undefined;
	/** if set to true then fails with an error when a node tries to load content from a file */
	disableFileAccess?: boolean | undefined;
	/** is an object with DKIM options */
	dkim?: DKIM.Options | undefined;
	/** method to normalize header keys for custom caseing */
	normalizeHeaderKey?(key: string): string;
	priority?: 'high' | 'normal' | 'low' | undefined;
}

class Mailer implements IMailer{
	host: string;

	port: number;

	secure: boolean;

	username: string;

	password: string;

	proxy: string;

	constructor(){
		this.host = '';
		this.port = 0;
		this.secure = false;
		this.username = '';
		this.password = '';
		this.proxy = '';
	}

	public setHost = (host: string) => {
		this.host = host;

		return this;
	};

	protected getHost = () => this.host;

	public setPort = (port: number) => {
		this.port = port;

		return this;
	};

	protected getPort = () => this.port;

	public setProxy = (proxy: string) => {
		this.proxy = proxy;

		return this;
	};

	protected getProxy = () => this.proxy;

	public setSecure = (secure: boolean) => {
		this.secure = secure;

		return this;
	};

	protected getSecure = () => this.secure;

	public setMailerUsername = (username: string) => {
		this.username = username;

		return this;
	};

	protected getMailerUsername = () => this.username;

	public setMailerPassword = (password: string) => {
		this.password = password;

		return this;
	};

	protected getMailerPassword = () => this.password;

	protected setTransporterOptions = () => {
		const options = {
			proxy: this.getProxy(),
			host: this.getHost(),
			port: this.getPort(),
			secure: this.getSecure(),
			auth: {
				user: this.getMailerUsername(),
				pass: this.getMailerPassword()
			}
		};

		return nodemailer.createTransport(options);
	};

	public sendMail = (mailOptions: ISendMailOptions) => {
		const transporter = this.setTransporterOptions();

		return transporter.sendMail({ ...mailOptions });
	};
}

const ostrichMailer = new Mailer();
ostrichMailer.setHost(mailConfig.EMAIL_HOST)
	.setMailerPassword(mailConfig.EMAIL_PASSWORD)
	.setPort(mailConfig.EMAIL_PORT)
	.setSecure(mailConfig.EMAIL_SECURE)
	.setMailerUsername(mailConfig.EMAIL_USER)
	.setProxy(mailConfig.EMAIL_PROXY);


export default ostrichMailer;
