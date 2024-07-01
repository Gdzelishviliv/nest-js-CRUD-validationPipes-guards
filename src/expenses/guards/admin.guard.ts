import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers['is-admin'];
    console.log('is-admin header:', isAdmin);
    if (isAdmin && isAdmin === 'true') {
      return true;
    }
    throw new ForbiddenException('Access denied');
  }
}
