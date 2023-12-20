import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { StarRating } from '@/shared/ui/depricated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/depricated/Input';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/depricated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card as CardDeprecated } from '@/shared/ui/depricated/Card';
import { Card } from '@/shared/ui/redesigned/Card';

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

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack align="center">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <>
                            <Text
                                title={
                                    starsCount ? t('Спасибо за оценку!') : title
                                }
                            />
                            <StarRating
                                selectedStarts={starsCount}
                                size={40}
                                onSelect={onSelectStars}
                            />
                        </>
                    }
                    off={
                        <>
                            <TextDeprecated
                                title={
                                    starsCount ? t('Спасибо за оценку!') : title
                                }
                            />
                            <StarRating
                                selectedStarts={starsCount}
                                size={40}
                                onSelect={onSelectStars}
                            />
                        </>
                    }
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack max gap={32}>
                        {modalContent}
                        <HStack max gap={16} justify="end">
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={
                                    <>
                                        <Button
                                            onClick={cancelHandler}
                                            variant="filled"
                                            data-testid="RatingCard.Close"
                                        >
                                            {t('Закрыть')}
                                        </Button>
                                        <Button
                                            onClick={acceptHandler}
                                            data-testid="RatingCard.Send"
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    </>
                                }
                                off={
                                    <>
                                        <ButtonDeprecated
                                            onClick={cancelHandler}
                                            theme={ButtonTheme.OUTLINE_RED}
                                            data-testid="RatingCard.Close"
                                        >
                                            {t('Закрыть')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            onClick={acceptHandler}
                                            data-testid="RatingCard.Send"
                                        >
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    </>
                                }
                            />
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen}>
                    <VStack gap={32}>
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button onClick={acceptHandler} size="xl">
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    onClick={acceptHandler}
                                    size={ButtonSize.XL}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={className}
                    padding="24"
                    border="round"
                    max
                    data-testid="RatingCard"
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={className}
                    max
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});

export { RatingCard };
