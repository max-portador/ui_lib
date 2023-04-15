import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StartRating } from '@/shared/ui/StarRating/StartRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { ButtonSize } from '@/shared/ui/Button/ui/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        hasFeedback,
        feedbackTitle,
        onAccept,
        onCancel,
        rate = 0,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
        </>
    );

    return (
        <Card className={className} max>
            <VStack align="center">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StartRating selectedStarts={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack max gap={32}>
                        {modalContent}
                        <HStack max gap={16} justify="end">
                            <Button
                                onClick={cancelHandler}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen}>
                    <VStack gap={32}>
                        {modalContent}
                        <Button onClick={acceptHandler} size={ButtonSize.XL}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});

export { RatingCard };
