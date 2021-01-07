import { IsEmail, IsString, MinLength, Matches } from 'class-validator'

export class SignupBody {
  @IsEmail()
  email: string

  // 英数字大文字小文字一文字以上使用
  // 八文字以上
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z\d]*$/, {
    message:
      'password must use at least one uppercase letter, lowercase letter, and number.',
  })
  password: string
}
